
#Comment from Mark A. Yoder
# Your code looks like mine, no changes were made
# The hc-sr-04 isn't an i2c device
# Give you lab partner's name too

# Demo       5
# ReadMe.txt 3
# Fritzing   0 - Appears copied
# Code       3
# Table      0 - Appears copied

# Grade 11/25

Date:16/09/2015

To: Mark A Yoder
From: g sadwith
Date: 24th September, 2015
Subject: Lab 04 Submission
Partner's Name :manoj
Name: g sadwith
Roll No.: B13210



	lab05 aims at measurement of distance of any object or obstacle by means of Range Sensors and Ultrasonic sensors.
	
	The wiring of the sensors is done as given in the Lab details. The sensors work on the principle of reflection of waves sent from the sensors, which on reflection from the surface of the obstacle returns to the reciever in the sensor. Based on the time delay, the distance of the obstacle from the source is calculated
	
	
	           Ultrasonic sensor Reading (in cm)  				Actual Distance ( in cm)
	                                                                                      
			                                                                5.4								                               6.0
			                                                                6.2								                               7.1
			                                                                
			                                                                
			                                                                6.6							                                        7.2
			                                                                7.5								                                8.5
			                                                                8.5												9.7
			                                                                 10												11.3
			                                                                 13												14.7
			                                                                 15												17.1
			                                                                  20												24.6
			       
	           
	      
	From the readings we can see that there is always some error in the measurement of the distance. We can see that the error increases with increase in distance, but the percentage of error decreases.
	
	The ultrasonic sensor has two cylinder like objects attached to them. One sends the wave while the other recieves the reflected wave. When Input is given to the trigger pin, a wave is sent and when the wave is recieved back, the echo pin is given logic 1 and input is given to the Beaglebone.Based on time difference, hte distance is calculated.
	
	This lab gave a broad overview of range sensors and their applications and working. But based on the errors obtained, it seems a bit unreliable.


we used proximity sensor to do a variation
