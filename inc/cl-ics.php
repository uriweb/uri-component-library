<?php
/**
 * COMPONENT LIBRARY ICS FILE
 *
 * @package uri-component-library
 */

header( 'Content-Type: text/calendar; charset=utf-8' );
header( 'Content-Disposition: attachment; filename=invite.ics' );
$dt = new DateTime( 'now' );

$ics = array(
	'BEGIN:VCALENDAR',
	'VERSION:2.0',
	'PRODID:-//hacksw/handcal//NONSGML v1.0//EN',
	'CALSCALE:GREGORIAN',
	'BEGIN:VEVENT',
	'DTSTART;VALUE=DATE:' . $_POST['date_start'],
	'SUMMARY:' . $_POST['summary'],
	'DTSTAMP:' . $dt->format( 'Ymd\THis\Z' ),
	'UID:' . uniqid(),
	'END:VEVENT',
	'END:VCALENDAR',
);

echo implode( "\n", $ics );
