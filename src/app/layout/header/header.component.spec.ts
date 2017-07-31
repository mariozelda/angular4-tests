import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SidenavService } from '../sidenav/sidenav.service';


describe('Component: /layout/header/header.component.ts', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/',
        },
        SidenavService
      ],
    })
    .compileComponents()
    .then(() => { });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
