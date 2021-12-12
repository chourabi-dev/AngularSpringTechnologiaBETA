import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCallComponent } from './server-call.component';

describe('ServerCallComponent', () => {
  let component: ServerCallComponent;
  let fixture: ComponentFixture<ServerCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
