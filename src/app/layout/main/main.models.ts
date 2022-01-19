export interface InfoCard{
    src : string,
    bg_color : string,
    title: string
}
export interface InfoSalesCard{
    src : string,
    sale_mount? : number,
    info: string,
    offer_mout? : number,
    dto: number,
    send_type: string
}

export interface InfoBanner {
    info_top?: string,
    src: string,
    title: string,
    info?: string,
    tag_buttom: string,
    bg_color: string
}