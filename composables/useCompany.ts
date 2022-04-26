import { ApplyState } from '../types'

export const useCompany = () => {
    const searchQuery = useState('searchQuery', () => '');
    const selectedCompany = useState('selectedCompany', () => null)
    const jobFilters = useState("jobsFilter", () => [
        {
            title: "Developer",
            selected: false,
        },
        {
            title: "Interaction Design",
            selected: false,
        },
        {
            title: "Product Design",
            selected: false,
        },
    ])
    const jobs = useState('jobs', () => (
        {
            items: [],
            loading: false
        }
    ))
    const filteredItems = computed(() => {
        const anySelectedJobFilter = jobFilters.value.some((e) => e.selected)
        let jobsVal = jobs.value.items;

        if (anySelectedJobFilter) {
            jobsVal = jobsVal.filter((item) => {
                const selectedJobFilters = jobFilters.value.filter((e) => e.selected)
                    .map((e) => e.title.toLowerCase());
                return selectedJobFilters.includes(item.jobDesc.toLowerCase());
            })
        }
        if (searchQuery.value) {
            jobsVal = jobsVal.filter((item) => {
                let searchQ = searchQuery.value
                return item.company.toLowerCase().search(RegExp(searchQ, 'i')) > -1
            })
        }
        return jobsVal
    })
    const randomEnumValue = (enumeration) => {
        const values = Object.keys(enumeration);
        const enumKey = values[Math.floor(Math.random() * values.length)];
        return enumeration[enumKey];
    }
    return {
        selectedCompany,

        applyJob: () => {
            selectedCompany.value.applyState = ApplyState.Applying
            const index = jobs.value.items.findIndex(item => item.id === selectedCompany.value.id);
            jobs.value.items[index].applyState = ApplyState.Applying
            setTimeout(() => {
                const randomApplyResult = randomEnumValue(ApplyState)
                console.log('Test: ', randomApplyResult);

                selectedCompany.value.applyState = randomApplyResult
                jobs.value.items[index].applyState = randomApplyResult
            }, 500);
        },
        onSelectCompany: (item) => {
            if (selectedCompany.value?.id == item.id) {
                selectedCompany.value = null
            } else {
                selectedCompany.value = item
            }
        },
        jobs,
        searchQuery,
        jobFilters,
        fetchJobs() {
            return new Promise(resolve => {
                setTimeout(() => {
                    jobs.value.items = [...jobs.value.items, {
                        id: 1,
                        company: "Airbnb",
                        companyLogo:
                            "https://blog.logomyway.com/wp-content/uploads/2020/03/arbnb-logo.jpg",
                        jobDesc: "Visual Designer",
                        createdAt: "3 days ago",
                        appliedCount: 6,
                        location: "Beijing, China",
                        applyState: ApplyState.Idle
                    },
                    {
                        id: 2,
                        company: "Google",
                        companyLogo:
                            "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
                        jobDesc: "UX Design Lead",
                        createdAt: "3 days ago",
                        appliedCount: 6,
                        location: "Singapore",
                        applyState: ApplyState.Idle
                    },
                    {
                        id: 3,
                        company: "Spotify",
                        companyLogo:
                            "https://www.readspeaker.com/wp-content/uploads/logo-spotify.png",
                        jobDesc: "Senior Product Designer",
                        createdAt: "3 days ago",
                        appliedCount: 6,
                        location: "New York, USA",
                        applyState: ApplyState.Idle
                    },
                    {
                        id: 4,
                        company: "IDEO",
                        companyLogo:
                            "https://upload.wikimedia.org/wikipedia/commons/d/d1/IDEO_logo_2.png",
                        jobDesc: "Developer",
                        createdAt: "3 days ago",
                        appliedCount: 6,
                        location: "London, UK",
                        applyState: ApplyState.Idle
                    },
                    {
                        id: 5,
                        company: "Twitch",
                        companyLogo:
                            "https://www.freepnglogos.com/uploads/twitch-app-logo-png-3.png",
                        jobDesc: "UI Designer",
                        createdAt: "3 days ago",
                        appliedCount: 6,
                        location: "Queensland, AUS",
                        applyState: ApplyState.Idle
                    },]
                    resolve(jobs.value.items)
                }, 1000);
            })
        },
        filteredItems,
        filteredItemsCount: computed(() => {
            return filteredItems.value.length
        })
    }
}