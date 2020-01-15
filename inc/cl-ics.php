<?php
/**
 * COMPONENT LIBRARY ICS FILE
 *
 * @package uri-component-library
 */

$summary = $_POST['summary'];
$dt = new DateTime( 'now' );

header( 'Content-Type: text/calendar; charset=utf-8' );
header( 'Content-Disposition: attachment; filename=' . $_POST['filename'] );

$ics = array(
	'BEGIN:VCALENDAR',
	'VERSION:2.0',
	'PRODID:-//hacksw/handcal//NONSGML v1.0//EN',
	'CALSCALE:GREGORIAN',
	'BEGIN:VEVENT',
	'DTSTART;VALUE=DATE:' . $_POST['date_start'],
	'SUMMARY:' . $summary,
	'DTSTAMP:' . $dt->format( 'Ymd\THis\Z' ),
	'UID:' . uniqid(),
	'END:VEVENT',
	'END:VCALENDAR',
);

echo implode( "\n", $ics );
