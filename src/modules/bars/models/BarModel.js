/* eslint-disable @typescript-eslint/camelcase */
export default class BarModel {
    id;
    name;
    description;
    address;
    city;
    zip_code;
    hours;
    happy_hour;
    coords;
    website_link;
    qrcode_menu;
    pictures;

    constructor(
        id = null,
        name = null,
        description = null,
        address = null,
        city = null,
        zip_code = null,
        hours = null,
        happy_hour = null,
        coords = null,
        website_link = null,
        qrcode_menu = null,
        pictures = null,
        ) {
        this.id = id
        this.name = name
        this.description = description
        this.address = address
        this.city = city
        this.zip_code = zip_code
        this.hours = hours
        this.happy_hour = happy_hour
        this.coords = coords
        this.website_link = website_link
        this.qrcode_menu = qrcode_menu
        this.pictures = pictures
    }
}