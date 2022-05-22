// import { AppComponent } from "./app.component"

import { AppComponent } from './app.component'
import { TestBed } from '@angular/core/testing'

const appComponentFixture = TestBed.createComponent(AppComponent)
const appComponent = appComponentFixture.debugElement.componentInstance

test('should create', () => {
  expect(appComponent).toBeTruthy()
})

test(`the title is 'angular14-jest-storybook`, () => {
  expect(appComponent.title).toEqual('angular14-jest-storybook')
})
