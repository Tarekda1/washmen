interface IOffice {
  location: string
  address: string
  coordinates: string
}
export interface IPartner {
  id: number
  urlName: string
  organization: string
  customerLocations: string
  willWorkRemotely: boolean
  website: string
  services: string
  offices: IOffice[]
}

