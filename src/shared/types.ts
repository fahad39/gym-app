export enum SelectedPage{
  Home="home",
  Benefits="benefits",
  OurClasses="ourclasses",
  ContactUs="Contactus"

}


export interface BenefitType{
  icon:JSX.Element,
  title:string,
  description:string
}