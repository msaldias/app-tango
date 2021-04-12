export class Profile {

    constructor(
        _id             = '', 
        idUser          = '',
        state           = '', 
        city            = '',
        profile         = '', 
        name            = '', 
        phone           = '',
        email           = '', 
        website         = '', 
        socialLink      = '',
        resume          = ''
    ) {
        this._id            = _id;
        this.idUser         = idUser;
        this.state          = state;
        this.city           = city,
        this.profile        = profile;
        this.name           = name;
        this.phone          = phone,
        this.email          = email;
        this.website        = website;
        this.socialLink     = socialLink;
        this.resume         = resume;
    }

    _id             : string;
    idUser          : string;
    state           : string;
    city            : string;
    profile         : string;
    name            : string;
    phone           : string;
    email           : string;
    website         : string;
    socialLink      : string;
    resume          : string;
}
