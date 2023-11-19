import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-bidon',
    templateUrl: './bidon.component.html',
    styleUrls: ['./bidon.component.scss'],
})
export class BidonComponent implements OnInit {
    public invisible = 2;
    public bidon = this.invisible;

    constructor(private cdkRef: ChangeDetectorRef) {}

    ngOnInit(): void {}

    public addBidon(): void {
        console.log(new Date().getTime());
        this.invisible++;
        this.cdkRef.markForCheck();
    }
}
