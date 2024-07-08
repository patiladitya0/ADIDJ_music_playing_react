# ADIDJ_music_playing_react

# Music Player Application
This is a React-based music player application that allows users to play, pause, and navigate through a list of music tracks. The application displays album information, artist names, and the current progress of the track being played.

# Features
Audio Playback: Play, pause, and skip tracks.
Progress Tracking: Real-time track progress display.
Album and Artist Information: Display album name and artist(s) of the current track.
Visual Effects: Animated waveforms and progress circle.

 # Technologies Used
React Icons: Used for icons on the website.
CSS Gradients: To create color shades.
Spotify API: To retrieve and play photos, names, and audio.

# Installation
Install dependencies: npm install
Start the application: npm start

Usage
Play/Pause: Click the play/pause button to start or stop the track.
Next/Previous: Use the next and previous buttons to navigate through the track list.
View Album and Artist Information: Album name and artist(s) are displayed along with the track.
Components
AudioPlayer
The main component responsible for:

# Managing audio playback.
Tracking and displaying the progress of the current track.
Displaying album and artist information.
ProgressCircle
Displays a circular progress bar indicating the track's progress.

# Waves
Shows animated waveforms during track playback.

# Controls
Includes buttons for play/pause, next, and previous track actions.

# Props
AudioPlayer
currentTrack: Object containing details of the current track.
album: Object containing details of the current album.
setCurrentIndex: Function to set the current track index.
total: Array of all tracks.
currentIndex: Index of the currently playing track.
res: Resource identifier for matching albums.
trend: Array of trending tracks/albums.


# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements
React documentation and community for guidance and support.
Open-source libraries used in this project.
