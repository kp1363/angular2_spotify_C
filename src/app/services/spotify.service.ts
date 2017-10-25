import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private clientId: string = 'aca3ba3fc9064821b5b43b6838a465f2';
    private clientSecret: string = '0e1352bf6a004ca8af3fe9ab13dd6066';
    constructor(private _http: Http) {

    }

    searchMusic(str: string, type = 'artist') {
        this.searchUrl = 'https://api.spotify.com/vi/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US' + '&client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&q=';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }
}