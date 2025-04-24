export interface UserData {
	name: string;
	surname: string;
	country: string;
	city: string;
	email: string;
	aboutInfo: string;
	topSkills: string[];
	skills: string[];
	media: {
		linkedIn: {
			url: string;
			name: string;
		};
		github: {
			url: string;
			name: string;
		};
		gitlab: {
			url: string;
			name: string;
		};
	};
	experience: Experience[];
	education: Education[];
	projects: {
		[key: string]: Project;
	};
}

export interface Experience {
	workTitle: string;
	company: string;
	startDate: string;
	endDate: string;
	location: string;
	city: string;
	aboutSkills: string[];
}

export interface Education {
	universityName: string;
	graduateTitle: string;
	startDate: string;
	endDate: string;
	location: string;
	city: string;
	aboutSkills: string[];
}

export interface Project {
	title: string;
	category: string;
	about: string;
	date: string;
	tools: string[];
	github: string;
	layout: {
		desktop: string[];
		tablet: string[];
		mobile: string[];
	};
}

export interface HeaderProps {
	setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isMenu: boolean;
	deviceView: String;
}

export interface HeaderMobProps {
	setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isMenu: boolean;
	setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
	isProfile: boolean;
}

export interface SidebarProps {
	isProfile: boolean;
	setIsProfile: (isProfile: boolean) => void;
}

export interface ProjectsProps {
	setShowProject: (show: boolean) => void;
}
