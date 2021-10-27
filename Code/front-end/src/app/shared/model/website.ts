export class Slider {
    id: number;
    sliderImg1: string;
    sliderImg2: string;
    sliderImg3: string;
    sliderImg1File: File;
    sliderImg2File: File;
    sliderImg3File: File;
    sliderTitle1: string;
    sliderTitle2: string;
    sliderTitle3: string;
    sliderSubTitle1: string;
    sliderSubTitle2: string;
    sliderSubTitle3: string;
}

export class OurServices {
    id: number;
    servicesTitle: string;
    servicesText: string;
}

export class OurServicesItem {
    id: number;
    title: string;
    subtitle: string;
    order: number;
    img: string;
    imgFile: File;
    isEditable: boolean;
}

export class About {
    id: number;
    aboutImg: string;
    aboutImgFile: File;
    aboutText: string;
    aboutTitle: string;
}

export class AboutItem {
    id: number;
    title: string;
    subtitle: string;
    order: number;
    icon: string;
    isEditable: boolean;
}