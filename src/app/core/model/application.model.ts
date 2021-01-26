export interface ApplicationModel {
    job: string;
    title: string;
    experience: string;
    country: string;
    city: string;
    privateProfile?: boolean
}

export interface Job {
    name: string;
    description: string;
    location: string;
    datePosted: string;
    numberOfRoles: number;
    categories: string[];
}