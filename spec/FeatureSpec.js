'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport
  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  it('planes can take off from airport and confirm take off', function(){
    plane.takeoff(airport);
    expect(airport.planes()).toNotContain(plane);
  });
});


  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when the airport is full

  // As the system designer
  // So that the software can be used for many different airports
  // I would like a default airport capacity that can be overridden as appropriate

  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  // As an air traffic controller
  // To ensure safety
  // I want to prevent landing when weather is stormy
