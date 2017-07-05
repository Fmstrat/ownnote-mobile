var TESTACCOUNT = true;
var DEBUG = true;
var DEBUGLEVEL = 4;


var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function() {
        	init();
        },

	acceptAllCerts: function(b) {
		try {
			dprint('acceptAllCerts:'+b, 2);
			cordovaHTTP.acceptAllCerts(b, function() {
				dprint("Accepting all certs:"+b, 3);
			}, function() {
				dprint("Accepting all certs: FAILED.", 3);
			});
		} catch(e) {
			jsError(e);
		}
	},

	basicAuth: function(u, p) {
		try {
			dprint('basicAuth', 2);
			cordovaHTTP.useBasicAuth(u, p, function() {
				dprint('Set Basic Auth', 3);
			}, function() {
				dprint('Set Basic Auth: FAIL', 3);
			});
		} catch(e) {
			jsError(e);
		}
	},

	// t = type, p = path, f = function, d = data, n = filename
	apiCall: function(t, p, f, d, fn) {
		//try {
			var url = server + "/index.php/apps/ownnote/api/v0.2/ownnote";
			if (p != '')
				url = url + "/" + p;
			if (t == "GET") {
				cordovaHTTP.get(url, { }, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						apiError(response.status, response.error);
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					apiError(response.status, response.error);
				});
			} else if (t == "POST") {
				cordovaHTTP.post(url, d, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						apiError(response.status, response.error);
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					apiError(response.status, response.error);
				});
			}
		//} catch(e) {
			//jsError(e);
		//}
	},

	// t = type, p = path, f = function, d = data, n = filename
	// BUG: Remove all TRANSITION this once we get a few months down the road from 6/3/2015
	TRANSITION_apiCall1: function(t, p, f, d, fn) {
		//try {
			var url = server + "/index.php/apps/ownnote/api/v0.2/ownnote";
			if (p != '')
				url = url + "/" + p;
			if (t == "GET") {
				cordovaHTTP.get(url, { }, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						//apiError(response.status, response.error);
						TRANSITION_apiSyncFirstRunNotes();
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					//apiError(response.status, response.error);
					TRANSITION_apiSyncFirstRunNotes();
				});
			} else if (t == "POST") {
				cordovaHTTP.post(url, d, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						//apiError(response.status, response.error);
						TRANSITION_apiSyncFirstRunNotes();
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					//apiError(response.status, response.error);
					TRANSITION_apiSyncFirstRunNotes();
				});
			}
		//} catch(e) {
			//jsError(e);
		//}
	},
	TRANSITION_apiCall2: function(t, p, f, d, fn) {
		//try {
			var url = server + "/index.php/apps/ownnote/api/v0.2/ownnote";
			if (p != '')
				url = url + "/" + p;
			if (t == "GET") {
				cordovaHTTP.get(url, { }, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						//apiError(response.status, response.error);
						TRANSITION_apiSyncFinished();
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					//apiError(response.status, response.error);
					TRANSITION_apiSyncFinished();
				});
			} else if (t == "POST") {
				cordovaHTTP.post(url, d, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						//apiError(response.status, response.error);
						TRANSITION_apiSyncFinished();
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					//apiError(response.status, response.error);
					TRANSITION_apiSyncFinished();
				});
			}
		//} catch(e) {
			//jsError(e);
		//}
	},
	TRANSITION_apiCall3: function(t, p, f, d, fn) {
		//try {
			var url = server + "/index.php/apps/ownnote/api/v0.2/ownnote";
			if (p != '')
				url = url + "/" + p;
			if (t == "GET") {
				cordovaHTTP.get(url, { }, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						data = $.parseJSON(data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						apiError(response.status, response.error);
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					apiError(response.status, response.error);
				});
			} else if (t == "POST") {
				cordovaHTTP.post(url, d, { "Authorization": "Basic " + btoa(usernameparsed + ":" + password) },
				function(response) {
					dprint("HTTP response: "+response.status, 6);
					try {
						var data = $.parseJSON(response.data);
						data = $.parseJSON(data);
						eval(f+"(data)");
					} catch(jsone) {
						dprint("JSON error: "+jsone, 4);
						apiError(response.status, response.error);
					}
				}, function(response) {
					dprint("HTTP response: "+response.status, 6);
					apiError(response.status, response.error);
				});
			}
		//} catch(e) {
			//jsError(e);
		//}
	},
};

var db;
var datapath = "";
var username = "";
var usernameparsed = "";
var password = "";
var server = "";
var menudisplayed = false;
var insecure = "false";
var saveoffline = "true";
var notes;
var localnotes;
var groups = new Array();
var syncnotesin = new Array();
var syncnotesout = new Array();
var curgroup = "";
var in_index;
var out_index;
var missing_index;
var notevalue = "";
var ingroup = "All";
var h = 200;
var tinymceinited = false;
var scrolleditor = false;
var platform;
var androidVersion = 0;
var initialWidth = 0;
var initialHeight = 0;
var initialOrientation = "";
var pickingimage = false;
var issyncing = false;
var onpage = 0;
var itemsperpage = 100;
var language = "en";
var headerhidden = false;
var touchdown = false;
var apponline = false;

function resetDefaults() {
	datapath = "";
	username = "";
	usernameparsed = "";
	password = "";
	server = "";
	menudisplayed = false;
	insecure = "false";
	saveoffline = "true";
	groups = new Array();
	syncnotesin = new Array();
	syncnotesout = new Array();
	curgroup = "";
	notevalue = "";
	ingroup = "All";
	h = 200;
	tinymceinited = false;
	scrolleditor = false;
	androidVersion = 0;
	initialWidth = 0;
	initialHeight = 0;
	initialOrientation = "";
	pickingimage = false;
	issyncing = false;
	onpage = 0;
	itemsperpage = 100;
	language = "en";
	headerhidden = false;
	touchdown = false;
	apponline = false;
}

function dprint(s, l) {
	if (DEBUG && l <= DEBUGLEVEL) {
		//alert(s);
		console.log(s);
	}
}

function ddump(obj, l) {
	if (DEBUG && l <= DEBUGLEVEL) {
		var out = '';
		for (var i in obj) {
			out += i + ": " + obj[i] + "\n";
		}
		//alert(out);
		console.log(out);
	}
}

function dmatch(s, localnote, note, l) {
	if (DEBUG && l <= DEBUGLEVEL) {
		var ds = s+"\n";
		ds += "name: L-"+localnote.name+" R-"+note.name+"\n";
		ds += "group: "+localnote.group+" "+note.group+"\n";
		if (localnote.mtime > note.mtime)
			ds += "mtime: "+localnote.mtime+" "+note.mtime+" - Local is newer\n";
		else if (note.mtime > localnote.mtime)
			ds += "mtime: "+localnote.mtime+" "+note.mtime+" - Remote is newer\n";
		else
			ds += "mtime: "+localnote.mtime+" "+note.mtime+" - Same mtime\n";
		ds += "deleted: "+localnote.deleted+" "+note.deleted+"\n";
		ds += "id: "+localnote.id+" "+note.id+"\n";
		//alert(ds);
		console.log(ds);
	}
}

function trans(s) {
	if (l10n[language] && l10n[language][s])
		return l10n[language][s];
	else
		return s;
}

function htmlQuotes(value, reverse){
	if (!reverse) {
		var r = value;
		r = r.replace(/\'/g, '&#39;');
		r = r.replace(/\"/g, '&quot;');
		return r;
	} else {
		var r = value;
		r = r.replace(/&#39;/g, "'");
		r = r.replace(/&quot;/g, '"');
		return r;
	}
}

function dbOpen() {
	try {
		db = window.sqlitePlugin.openDatabase({name: "ownnote.db"});
		db.transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS notes (id integer primary key, fieldvar text, fieldval blob)');
			tx.executeSql('CREATE TABLE IF NOT EXISTS settings (id integer primary key, fieldvar text, fieldval text)');
		});
	} catch(e) {
		jsError(e);
	}
}

function dbLogin(func) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('SELECT fieldvar,fieldval FROM settings WHERE fieldvar="username" OR fieldvar="password" OR fieldvar = "server" OR fieldvar = "insecure" OR fieldvar = "saveoffline"', [ ], function(tx, res) {
				var username, password, server, insecure, saveoffline;
				if (res != null && res.rows != null) {
					var len = res.rows.length, i;
					for (i = 0; i < len; i++) {
						if (res.rows.item(i).fieldvar == "username")
							username = res.rows.item(i).fieldval;
						else if (res.rows.item(i).fieldvar == "password")
							password = res.rows.item(i).fieldval;
						else if (res.rows.item(i).fieldvar == "server")
							server = res.rows.item(i).fieldval;
						else if (res.rows.item(i).fieldvar == "insecure")
							insecure = res.rows.item(i).fieldval;
						else if (res.rows.item(i).fieldvar == "saveoffline")
							saveoffline = res.rows.item(i).fieldval;
					}
				}
				func(username, password, server, insecure, saveoffline);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function dbSelect(fieldvar, func) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('SELECT fieldval FROM notes WHERE fieldvar=?', [ fieldvar ], function(tx, res) {
				dprint('Value selected: '+fieldvar, 5);
				var v;
				if (res != null && res.rows != null && res.rows.length > 0) {
					v = res.rows.item(0).fieldval;
				}
				func(v);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function dbInsertSetting(fieldvar, fieldval) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('DELETE FROM settings where fieldvar=?', [ fieldvar ], function(tx2, res) {
				dprint('Value deleted pre-insert: '+fieldvar, 5);
				tx2.executeSql('INSERT INTO settings (fieldvar, fieldval) values (?,?)', [ fieldvar, fieldval ], function(tx3, res) {
					dprint('Value inserted: '+fieldvar, 5);
				});
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function dbInsert(fieldvar, fieldval) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('DELETE FROM notes where fieldvar=?', [ fieldvar ], function(tx2, res) {
				dprint('Value deleted pre-insert: '+fieldvar, 5);
				tx2.executeSql('INSERT INTO notes (fieldvar, fieldval) values (?,?)', [ fieldvar, fieldval ], function(tx3, res) {
					dprint('Value inserted: '+fieldvar, 5);
				});
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function dbUpdate(fieldvar, fieldval) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('UPDATE notes set fieldval=? WHERE fieldvar=?', [ fieldval, fieldvar ], function(tx, res) {
				dprint('Value updated: '+fieldvar, 5);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function dbDeleteAll() {
	try {
		db.transaction(function(tx) {
			tx.executeSql('DELETE FROM notes', [ ], function(tx2, res) {
				dprint('Deleted all notes.', 4);
				tx2.executeSql('DELETE FROM settings', [ ], function(tx, res) {
					dprint('Deleted all settings.', 4);
					fsDeleteAll();
				});
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function setDebug() {
	if (username.lastIndexOf("[DEBUG]",0) === 0) {
		DEBUG = true;
		DEBUGLEVEL = 4;
		if (username.lastIndexOf("[DEBUG][",0) === 0) {
			DEBUGLEVEL = parseInt(username[8]);
		}
	}
}

function testAccount() {
	if (TESTACCOUNT) {
		$('#server').val('https://192.168.56.50/owncloud');
		$('#username').val('admin');
		$('#password').val('admin');
	}
}

function dbDelete(fieldvar) {
	try {
		db.transaction(function(tx) {
			tx.executeSql('DELETE FROM notes where fieldvar=?', [ fieldvar ], function(tx, res) {
				dprint('Value deleted: '+fieldvar, 5);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsUpdate(filename, data) {
	fsInsert(filename, data);
}

function fsInsert(filename, data) {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath+"/notes", {create: true}, function(dirEntry) {
				dirEntry.getFile(filename, { create: true }, function(fileEntry) {
					fileEntry.createWriter(function(writer) {
						dprint("Created writer: "+filename, 4);
						writer.onwrite = function(evt) {
							dprint("Wrote to file: "+filename, 4);
						};
						writer.write(data);
					}, function(error) {
						dprint("Error creating writer: "+error.code+" "+filename, 4);
					});
				},
				function(error) {
					dprint("Error 1: "+error.code+" "+filename, 4);
				});
			},
			function(error) {
				dprint("Error 2: "+error.code+" "+filename, 4);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsInit() {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath, {create: true}, function(dirEntry) {
				dprint("Created data directory.", 4);
			},
			function(error) {
				dprint("Error fsInit: "+error.code, 4);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsCheck(filename, func) {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath+"/notes", {create: true}, function(dirEntry) {
				dirEntry.getFile(filename, { create: false }, function(fileEntry) {
					fileEntry.file(function(file) {
						var reader = new window.FileReader();
						reader.onloadend = function(evt) { 
							if (evt.target.result == null)
								func(false);
							else
								func(true);
						};
						reader.onerror = function(evt) {
							dprint("Error in reader: "+filename, 4);
						};
						reader.readAsDataURL(file);
					}, function(error) {
						dprint("Not found reading file: "+error.code+" "+filename, 4);
						func(false);
					});
				},
				function(error) {
					dprint("Not found with file: "+error.code+" "+filename, 4);
					func(false);
				});
			},
			function(error) {
				dprint("Error on check directory: "+error.code+" "+filename, 4);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsSelect(filename, func, efunc) {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath+"/notes", {create: true}, function(dirEntry) {
				dirEntry.getFile(filename, { create: false }, function(fileEntry) {
					fileEntry.file(function(file) {
						var reader = new window.FileReader();
						reader.onloadend = function(evt) { 
							dprint("Finished reading file: "+filename, 4);
							if (evt.target.result == null)
								func('');
							else
								func(evt.target.result);
						};
						reader.onerror = function(evt) {
							dprint("Error in reader: "+filename, 4);
						};
						reader.readAsText(file);
					}, function(error) {
						dprint("Error reading file: "+error.code+" "+filename, 4);
						if (efunc != null)
							efunc();
					});
				},
				function(error) {
					dprint("Error with file: "+error.code+" "+filename, 4);
					if (efunc != null)
						efunc();
				});
			},
			function(error) {
				dprint("Error on select directory: "+error.code+" "+filename, 4);
				if (efunc != null)
					efunc();
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsDelete(filename) {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath+"/notes", {create: true}, function(dirEntry) {
				dirEntry.getFile(filename, { create: false }, function(fileEntry) {
					fileEntry.remove(function(file) {
						dprint("Removed file: "+filename, 4);
					}, function(error) {
						dprint("Error removing file: "+error.code+" "+filename, 4);
					});
				},
				function(error) {
					dprint("Error: "+error.code+" "+filename, 4);
				});
			},
			function(error) {
				dprint("Error: "+error.code+" "+filename, 4);
			});
		});
	} catch(e) {
		jsError(e);
	}
}

function fsDeleteAll() {
	try {
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
			fileSystem.root.getDirectory(datapath+"/notes", {create: true}, function(dirEntry) {
				dirEntry.removeRecursively(function() {
					dprint("Removed all notes", 4);
					backgroundApp();
				},
				function(error) {
					dprint("Recursive Error: "+error.code, 4);
					backgroundApp();
				});
			},
			function(error) {
				dprint("Recursive Directory Error: "+error.code, 4);
				backgroundApp();
			});
		});
	} catch(e) {
		jsError(e);
	}
}


function getAndroidVersion(ua) {
	try {
		var ua = ua || navigator.userAgent; 
		var match = ua.match(/Android\s([0-9\.]*)/);
		return match ? match[1] : false;
	} catch(e) {
		jsError(e);
	}
}

function deviceOnline() {
	try {
		apponline = true;
		if (platform == "android" && androidVersion < 4.0)
			$('#logo').attr('src', 'img/logo-icon.png');
		else
			$('#logo').attr('src', 'img/logo-icon.svg');
	} catch(e) {
		jsError(e);
	}
}

function deviceOffline() {
	try {
		apponline = false;
		if (platform == "android" && androidVersion < 4.0)
			$('#logo').attr('src', 'img/logo-icon-offline.png');
		else
			$('#logo').attr('src', 'img/logo-icon-offline.svg');
	} catch(e) {
		jsError(e);
	}
}

function syncAnimationStart() {
	try {
		$('#logo').attr('src', 'img/loading.gif');
	} catch(e) {
		jsError(e);
	}
}

function syncAnimationStop() {
	try {
		if (apponline)
			if (platform == "android" && androidVersion < 4.0)
				$('#logo').attr('src', 'img/logo-icon.png');
			else
				$('#logo').attr('src', 'img/logo-icon.svg');
		else
			if (platform == "android" && androidVersion < 4.0)
				$('#logo').attr('src', 'img/logo-icon-offline.png');
			else
				$('#logo').attr('src', 'img/logo-icon-offline.svg');
	} catch(e) {
		jsError(e);
	}
}

function startSync() {
	// BUG: Large note causes JSON out of memory error on 4.1.2. Likely a phonegap bug. Needs GSON: http://stackoverflow.com/questions/17855045/out-of-memory-error-while-parsing-a-large-json-response
	try {
		dprint('startSync', 2);
		if (localnotes == null) {
			dbSelect("localnotes", function(tmplocalnotes) {
				if (tmplocalnotes != null && tmplocalnotes != '')
					localnotes = $.parseJSON(tmplocalnotes);
				if (apponline) {
					issyncing = true;
					syncAnimationStart();
					dprint('app is online', 2);
					setTimeout(apiSyncFirstRunNotes, 500);
				}
			});
		} else {
			if (apponline) {
				issyncing = true;
				syncAnimationStart();
				dprint('app is online', 2);
				setTimeout(apiSyncFirstRunNotes, 500);
			}
		}
	} catch(e) {
		jsError(e);
	}
}

function syncAllNotes(data) {
	try {
		dprint('syncAllNotes', 2);
		notes = data;
		syncnotesin.length = 0;
		syncnotesout.length = 0;
		// First, loop through local notes to check for sync
		if (localnotes != null && localnotes != '') {
			dprint('localnotes length: '+localnotes.length, 2);
			$.each(localnotes, function (l, localnote) {
				var found = false;
				$.each(notes, function (r, note) {
					if (localnote.name == note.name && localnote.group == note.group) {
						dmatch("Matched local to remote:", localnote, note, 6);
						found = true;
						// Is either note marked for deletion?
						if (localnote.deleted == 1 || note.deleted == 1) {
							// If both are marked deleted, no action is required
							// If not, which one is newer, the save or the delete?
							if (localnote.deleted != note.deleted) {
								dprint("Deletes don't match, action required", 2);
								if (note.deleted == 1) {
									// Remote was deleted
									if (note.mtime > localnote.mtime) {
										// Delete it locally
										dprint('Going to delete locally A', 3);
										dmatch("Match:", localnote, note, 4);
										syncnotesin.push(r);
									} else {
										// Create remotely
										dprint('Going to create remotely A', 3);
										dmatch("Match:", localnote, note, 4);
										syncnotesout.push(l);
									}
								} else {
									// Local was deleted
									if (localnote.mtime > note.mtime) {
										// Delete it remotely
										dprint('Going to delete remotely B', 3);
										dmatch("Match:", localnote, note, 4);
										syncnotesout.push(l);
									} else {
										// Create locally
										dprint('Going to create locally B', 3);
										dmatch("Match:", localnote, note, 4);
										syncnotesin.push(r);
									}
								}
							}
						} else {
							// If it's found, is remote newer? If so, flag for sync
							if (note.mtime > localnote.mtime) {
								dprint('Remote newer, syncing.', 3);
								dmatch("Match:", localnote, note, 4);
								syncnotesin.push(r);
							}
							// Is the local note newer? If so, flag for update
							if (note.mtime < localnote.mtime) {
								dprint('Local newer, syncing.', 3);
								dmatch("Match:", localnote, note, 4);
								syncnotesout.push(l);
							}
						}
					}
				});
				if (!found) {
					dprint('Found new local note.', 3);
					dmatch("New found:", localnote, localnote, 4);
					syncnotesout.push(l);
				}
			});
		}
		// Second loop through remote notes to check for brand new files
		$.each(notes, function (r, note) {
			var found = false;
			if (note.deleted == 0 && localnotes != null && localnotes != '') {
				// There are local notes, we need to compare
				$.each(localnotes, function (l, localnote) {
					if (localnote.name == note.name && localnote.group == note.group) {
						dmatch("Not New Match:", localnote, note, 6);
						found = true;
						return false;
					}
				});
				if (!found) {
					dprint("New Remote Note found", note, 3);
					dmatch("New Note:", note, note, 4);
					syncnotesin.push(r);
				}
			} else {
				// There aren't any local notes, just push them all
				if (note.deleted == 0) {
					dprint("New Remote Note found", 3);
					dmatch("New Note:", note, note, 4);
					syncnotesin.push(r);
				}
			}
		});
		// Last, loop through notes to sync
		dprint('syncnotesin:'+syncnotesin.length, 2);
		dprint('syncnotesout:'+syncnotesout.length, 2);
		in_index = 0;
		out_index = 0;
		syncCheckForDuplicates();
	} catch(e) {
		jsError(e);
	}
}

function syncCheckForDuplicates() {
	try {
		// If there is an "in" and and "out" with the same name, override with then "in"
		dprint('checkForDuplicates', 2);
		var ll = syncnotesout.length;
		var rl = syncnotesin.length;
		for (var l = 0; l < ll; l++) {
			var noteout = localnotes[syncnotesout[l]];
			for (var r = 0; r < rl; r++) {
				var notein = notes[syncnotesin[r]];
				if (notein.name == noteout.name && notein.group == noteout.group) {
					dprint('We have a duplicate match, using remote.', 3);
					dmatch("Duplicate Match:", noteout, notein, 4);
					syncnotesout[l] = -1;
					break;
				}
			}
		}
		syncCheckNote();
	} catch(e) {
		jsError(e);
	}
}

function syncCheckForMissing() {
	// Recursive check for missing files
	try { 
		if (localnotes != null && localnotes.length != null && missing_index < localnotes.length) {
			if (localnotes[missing_index].deleted == 0) {
				var filename = localnotes[missing_index].name;
				if (localnotes[missing_index].group != '')
					filename = "["+localnotes[missing_index].group+"] "+localnotes[missing_index].name;
				fsCheck(filename, function(fileexists) {
					try { 
						if (fileexists) {
							missing_index++;
							syncCheckForMissing();
						} else {
							dprint('We have a missing note, downloading remote: '+filename, 3);
							apiSyncRegetNote(localnotes[missing_index].name, localnotes[missing_index].group, missing_index);
						}
					} catch(e) {
						jsError(e);
					}
				});
			} else {
				missing_index++;
				syncCheckForMissing();
			}
		} else {
			dprint('About to finish', 2);
			apiSyncFinished();
		}
	} catch(e) {
		jsError(e);
	}
}

function syncGotMissing(data) {
	try {
		dprint('syncGotMissing', 2);
		// Save the note first
		var note = localnotes[missing_index];
		var filename = note.name;
		if (note.group != '')
			filename = "["+note.group+"] "+note.name;
		fsInsert(filename, data);
		// Move on to the next
		missing_index++;
		syncCheckForMissing();
	} catch(e) {
		jsError(e);
	}
}

function syncCheckNote() {
	try {
		dprint('syncCheckNote', 2);
		var totalsync = syncnotesin.length+syncnotesout.length;
		var currentsync = in_index+out_index;
		$('#loadingtext').html(trans("#1 of #2 notes").replace('#1', currentsync).replace('#2', totalsync));
		if (in_index < syncnotesin.length) {
			dprint('syncnotesin', 2);
			var note = notes[syncnotesin[in_index]];
			if (note.deleted == 0) {
				if (saveoffline == "true") {
					dprint('Getting note', 2);
					apiSyncGetNote(note.name, note.group);
				} else {
					// Move on to the next
					in_index++;
					syncCheckNote();
				}
			} else {
				dprint('Removing local note', 2);
				var filename = note.name;
				if (note.group != '')
					filename = "["+note.group+"] "+note.name;
				fsDelete(filename);
				in_index++;
				syncCheckNote();
			}
			// After this we will need to resync the localnotes listing to remove any extrenuous records
		} else if (out_index < syncnotesout.length) {
			dprint('syncnotesout', 2);
			if (syncnotesout[out_index] != -1) {
				var localnote = localnotes[syncnotesout[out_index]];
				if (localnote.deleted == 0) {
					dprint('Saving remote note', 2);
					apiSyncSaveNote(localnote.name, localnote.group);
				} else {
					dprint('Deleting remote note', 2);
					apiSyncDelNote(localnote.name, localnote.group);
				}
			} else {
				out_index++;
				syncCheckNote();
			}
		} else {
			// We've finished syncing, so set localnotes to notes to finalize and ensure mtime's line up
			dprint('About to finish, checking for missing', 2);
			missing_index = 0;
			// Check for mising is slow. If we can't speed it up, we will instead alert if a file is missing
			// if loaded when offline
			//if (saveoffline == "true")
				//syncCheckForMissing();
			//else
				//apiSyncFinished();
			apiSyncFinished();
		}
	} catch(e) {
		jsError(e);
	}
}

function syncFinished(data) {
	try {
		dprint('syncFinished', 2);
		notes = data;
		localnotes = notes;
		dbInsert("localnotes", JSON.stringify(data));
		dprint("Localnotes: "+localnotes.length, 2);
		var fs = function() { setTimeout(syncAnimationStop, 1000); };
		buildListing(fs);
		$('#popuploading').popup('close');
		issyncing = false;
	} catch(e) {
		jsError(e);
	}
}

function syncGotNote(data) {
	try {
		dprint('syncGotNote', 2);
		// Save the note first
		var note = notes[syncnotesin[in_index]];
		var filename = note.name;
		if (note.group != '')
			filename = "["+note.group+"] "+note.name;
		fsInsert(filename, data);
		// Move on to the next
		in_index++;
		syncCheckNote();
	} catch(e) {
		jsError(e);
	}
}

function syncSavedNote(data) {
	try {
		dprint('syncSavedNote', 2);
		// Move on to the next
		out_index++;
		syncCheckNote();
	} catch(e) {
		jsError(e);
	}
}

function syncDeletedNote(data) {
	try {
		dprint('syncDeletedNote', 2);
		// Move on to the next
		out_index++;
		syncCheckNote();
	} catch(e) {
		jsError(e);
	}
}

function apiError(status, response) {
	try {
		$('#jserrortitle').hide();
		$('#apierrortitle').show();
		dprint("apiError: "+status+" - "+response, 4);
		if (status == 0) {
			$('#errortext').html(trans('Network issue or invalid SSL certificate.'));
		} else if (status == 200) {
			$('#errortext').html(trans('Invalid username and/or password, or cannot connect to server.'));
		} else if (status == 400) {
			$('#errortext').html(trans('Bad request. Potential fixes are using a different host name or editing the trusted_domain setting in ownCloud.'));
		} else if (status == 403) {
			$('#errortext').html(trans('Requested URL not found.'));
		} else if (status == 405) {
			$('#errortext').html(trans('Requested method not allowed. Please make sure you are running the latest version of ownNote on your server.'));
		} else if (status == 500) {
			$('#errortext').html(trans('Internel Server Error. This could be due to an unsigned certificate. You may wish to try allowing all certificates.'));
		}  else {
			$('#errortext').html(trans('Unknown Error.') + '\n' + status + ": " + response);
		}
		buildLogin(true);
		syncAnimationStop();
	} catch(e) {
		jsError(e);
	}
}

function jsError(err) {
	$('#apierrortitle').hide();
	$('#jserrortitle').show();
	$('#errortext').html(trans('Full details can be found in your logcat:')+' '+err);
	console.log('OWNNOTEERROR: '+ err);
	buildLogin(true);
	syncAnimationStop();
}

function apiSyncFirstRunNotes() {
	try {
		app.TRANSITION_apiCall1('GET', 'mobileindex', 'syncAllNotes', '');
	} catch(e) {
		jsError(e);
	}
}

function TRANSITION_apiSyncFirstRunNotes() {
	try {
		app.TRANSITION_apiCall3('GET', 'remoteindex', 'syncAllNotes', '');
	} catch(e) {
		jsError(e);
	}
}

function apiSyncFinished() {
	try {
		app.TRANSITION_apiCall2('GET', 'mobileindex', 'syncFinished', '');
	} catch(e) {
		jsError(e);
	}
}

function TRANSITION_apiSyncFinished() {
	try {
		app.TRANSITION_apiCall3('GET', 'remoteindex', 'syncFinished', '');
	} catch(e) {
		jsError(e);
	}
}


function apiSyncSaveNote(name, group) {
	try {
		var filename = name;
		if (group != '')
			filename = "["+group+"] "+name;
		fsSelect(filename, function(content) {
			var data = { name: name, group: group, content: content };
			app.apiCall("POST", "save", "syncSavedNote", data);
		});
	} catch(e) {
		jsError(e);
	}
}

function apiSyncGetOfflineNote(name, group) {
	try {
		var data = { name: name, group: group };
		app.apiCall("POST", "edit", "gotOfflineNote", data);
	} catch(e) {
		jsError(e);
	}
}


function apiSyncGetNote(name, group) {
	try {
		var data = { name: name, group: group };
		app.apiCall("POST", "edit", "syncGotNote", data);
	} catch(e) {
		jsError(e);
	}
}

function apiSyncRegetNote(name, group) {
	try {
		var data = { name: name, group: group };
		app.apiCall("POST", "edit", "syncGotMissing", data);
	} catch(e) {
		jsError(e);
	}
}

function apiSyncDelNote(name, group) {
	try {
		var data = { name: name, group: group };
		app.apiCall("POST", "del", "syncDeletedNote", data);
	} catch(e) {
		jsError(e);
	}
}

function apiGetVersion() {
	try {
		app.apiCall('GET', 'version', 'checkVersion', '');
	} catch(e) {
		jsError(e);
	}
}

// Modified From: http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
function convertImgToBase64URL(url, callback, outputFormat){
	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function() {
		var canvas = document.createElement('CANVAS'),
		ctx = canvas.getContext('2d'), dataURL;
		canvas.height = img.height;
		canvas.width = img.width;
		ctx.drawImage(img, 0, 0);
		dataURL = canvas.toDataURL(outputFormat);
		callback(url, dataURL);
		canvas = null; 
	};
	img.src = url;
}

function refreshNotes() {
	try {
		var fs = function() { if (apponline) startSync(); };
		buildListing(fs);
	} catch(e) {
		jsError(e);
	}
}

function getPath(filename) {
	var path = window.location.pathname;
	path = path.substr( path, path.length - 10 );
	if (platform == "android")
		path = "file://" + path;
	return path;
}

function displayNote(lni) {
	try {
		var name = localnotes[lni].name;
		var group = localnotes[lni].group;
		if (saveoffline == "true") {
			$("[data-role='header'] h1").text(name);
			$('#curNoteName').val(name);
			$('#curNoteGroup').val(group);
			$('#newNoteName').val(name);
			$('#newNoteGroup').val(group);
			var filename = name;
			if (group != '')
				filename = '['+group+'] '+name;
			$('#curNoteFilename').val(filename);
			fsSelect(filename, showNote, function() {
				// Note is missing from SD card. Re-download if we can
				if (apponline) {
					dprint('Getting note: '+name+' '+group, 4);
					apiSyncGetOfflineNote(name, group);
				} else {
					$('#popupnotsynced').popup("open");
				}
			});
		} else {
			if (apponline) {
				$("[data-role='header'] h1").text(name);
				$('#curNoteName').val(name);
				$('#curNoteGroup').val(group);
				$('#newNoteName').val(name);
				$('#newNoteGroup').val(group);
				var filename = name;
				if (group != '')
					filename = '['+group+'] '+name;
				$('#curNoteFilename').val(filename);
				dprint('Getting note: '+name+' '+group, 4);
				apiSyncGetOfflineNote(name, group);
			} else {
				$('#popupnotsynced').popup("open");
			}
		}
	} catch(e) {
		jsError(e);
	}
}

function showNote(data) {
	try {
		var dataprefix = "";
		if (data == '') {
			$('#viewable').html('<i>'+trans('This note is empty.')+'</i>');
		} else {
			$('#viewable').html(data);
		}
		notevalue = $('#viewable').html();
		dprint('tinymceinited: '+tinymceinited, 2);
		if (!tinymceinited)
			$('#editable').html(dataprefix+data);
		else
			tinymce.activeEditor.setContent(dataprefix+data);
		$('#header-listing').hide();
		$('#header-grouplisting').hide();
		$('#header-viewnote').show();
		$.mobile.changePage($('#noteview'), {});
		setTimeout(function() { updateViewer($('#viewable')) }, 500);
	} catch(e) {
		jsError(e);
	}
}

function gotOfflineNote(data) {
	var filename = $('#curNoteFilename').val();
	fsInsert(filename, data);
	showNote(data);
}

function updateViewer(layername) {
	try {
		dprint('updateViewer', 2);
		resizeImages(layername);
		makeLinks(layername);
	} catch(e) {
		jsError(e);
	}
}

function makeLinks(layername) {
	try {
		dprint('makeLinks', 2);
		var autolinker = new Autolinker( { newWindow: true, stripPrefix: false } );
		layername.html(autolinker.link(layername.html()));
	} catch(e) {
		jsError(e);
	}
}

// BUG: If resized for portrait, and rotate to landscape, images stay small.
function resizeImages(layername) {
	try {
		dprint('resizeImages', 2);
		var maxwidth = Math.floor($(window).width() * .9);
		layername.find("img").each(function(index) { 
			var width = $(this).width();
			if (width > maxwidth)
				$(this).width(maxwidth);
		});
	} catch(e) {
		jsError(e);
	}
}

function editNote() {
	try {
		$.mobile.changePage($('#noteedit'), {});
		$('#header-viewnote').hide();
		$('#header-editnote').show();
		$('#viewfooter').hide();
		if (!tinymceinited)
			tinymceInit();
		else
			tinymceInitFinished();
	} catch(e) {
		jsError(e);
	}
}

function deleteNote() {
	try {
		var name = $('#curNoteName').val();
		var group = $('#curNoteGroup').val();
		$.each(localnotes, function (i, note) {
			if (note.name == name && note.group == group) {
				note.mtime = Math.floor(Date.now()/1000);
				note.deleted = 1;
				var filename = name;
				if (group != '')
					filename = '['+group+'] '+name;
				fsDelete(filename);
			}
		});
		dbInsert("localnotes", JSON.stringify(localnotes));
		refreshNotes();
		$.mobile.changePage($('#noteslisting'), {});
	} catch(e) {
		jsError(e);
	}
}

function renameNote() {
	try {
		var newname = $('#filename').val().replace(/\\/g, '-').replace(/\//g, '-');
		var newgroup = $('#group').val().replace(/\\/g, '-').replace(/\//g, '-');
		var name = $('#curNoteName').val();
		var group = $('#curNoteGroup').val();
		if (newname != "" && (name != newname || group != newgroup)) {
			$('#newNoteName').val(newname);
			$('#newNoteGroup').val(newgroup);
			var filename = name;
			if (group != '')
				filename = '['+group+'] '+name;
			var newfilename = newname;
			if (newgroup != '')
				newfilename = '['+newgroup+'] '+newname;
			// Create new
			var o = {};
			o.id = -1;
			o.name = newname;
			o.group = newgroup;
			o.timestring = '';
			o.mtime = Math.floor(Date.now()/1000);
			o.timediff = 0;
			o.deleted = 0;
			localnotes.push(o);
			fsSelect(filename, function(content) {
				fsInsert(newfilename, content);
				// Delete old
				fsDelete(filename);
				$.each(localnotes, function (i, note) {
					if (note.name == name && note.group == group) {
						note.mtime = Math.floor(Date.now()/1000);
						note.deleted = 1;
					}
				});
				$('#curNoteName').val(newname);
				$('#curNoteGroup').val(newgroup);
				$('#curNoteFilename').val(newfilename);
				$("[data-role='header'] h1").text(newname);
				$('#popuprename').popup("close");
				refreshNotes();
			});
		} else
			$('#popuprename').popup("close");
	} catch(e) {
		jsError(e);
	}
}

function renameGroup() {
	try {
		var newgroup = $('#renamegroup').val();
		var group = ingroup;
		if (newgroup != "" && newgroup != group) {
			curgroup = " | " + newgroup;
			$("[data-role='header'] h1").text("Notes"+curgroup);
			$.each(localnotes, function (i, note) {
				if (note.group == group && note.deleted == 0) {
					note.mtime = Math.floor(Date.now()/1000);
					note.deleted = 1;
					var o = {};
					o.id = -1;
					o.name = note.name;
					o.group = newgroup;
					o.timestring = '';
					o.mtime = Math.floor(Date.now()/1000);
					o.timediff = 0;
					o.deleted = 0;
					localnotes.push(o);
					dmatch("Test", note, o, 4);
					var filename = '['+group+'] '+note.name;
					var newfilename = '['+newgroup+'] '+note.name;
					fsSelect(filename, function(content) {
						fsDelete(filename);
						fsInsert(newfilename, content);
					});
				}
			});
			refreshNotes();
			$.mobile.changePage($('#noteslisting'), {});
		} else 
			$('#popuprenamegroup').popup("close");
	} catch(e) {
		jsError(e);
	}
}

function create() {
	try {
		$('#popupcreate').popup("open");
	} catch(e) {
		jsError(e);
	}
}

function sortLocalNotes() {
	var byName = localnotes.slice(0);
	byName.sort(function(a,b) {
		var x = a.name.toLowerCase();
		var y = b.name.toLowerCase();
		return x < y ? -1 : x > y ? 1 : 0;
	});
	localnotes = byName;
}

function createNote() {
	try {
		var name = $('#newfilename').val().replace(/\\/g, '-').replace(/\//g, '-');
		var group = $('#newgroup').val().replace(/\\/g, '-').replace(/\//g, '-');
		$('#newfilename').val('');
		$('#newgroup').val('');
		if (name != '') {
			var o = {};
			o.id = -1;
			o.name = name;
			o.group = group;
			o.timestring = '';
			o.mtime = Math.floor(Date.now()/1000);
			o.timediff = 0;
			o.deleted = 0;
			localnotes.push(o);
			sortLocalNotes();
			var filename = o.name;
			if (o.group != '')
				filename = "["+o.group+"] "+o.name;
			fsInsert(filename, '');
			dbInsert("localnotes", JSON.stringify(localnotes));
			refreshNotes();
			$.mobile.changePage($('#noteslisting'), {});
		}
	} catch(e) {
		jsError(e);
	}
}

function renameN() {
	try {
		// In a note
		var name = $('#newNoteName').val();
		var group = $('#newNoteGroup').val();
		$('#filename').val(name);
		$('#group').val(group);
		$('#popuprename').popup("open");
	} catch(e) {
		jsError(e);
	}
}

function renameG() {
	try {
		// In a note listing of group
		$('#popuprenamegroup').popup("open");
	} catch(e) {
		jsError(e);
	}
}

function saveNote() {
	try {
		var name = $('#curNoteName').val();
		var group = $('#curNoteGroup').val();
		var content = "";
		$.each(localnotes, function (i, note) {
			if (note.name == name && note.group == group) {
				note.mtime = Math.floor(Date.now()/1000);
				var filename = name;
				if (group != '')
					filename = '['+group+'] '+name;
				content = tinymce.activeEditor.getContent();
				fsUpdate(filename, content);
			}
		});
		if (platform == "ios") {
			$.mobile.changePage($('#noteview'), {});
		} else if (platform == "android" && androidVersion < 4.0) {
			$.mobile.changePage($('#noteview'), {});
		}
		refreshNotes();
	} catch(e) {
		jsError(e);
	}
}

function tinymceInit() {
	try {
		tinymceinited = true;
		tinymce.init({
			selector: "div.editable",
			menubar: false,
			statusbar: false,
			plugins: [
				"advlist autolink lists link charmap print preview anchor",
				"searchreplace visualblocks code fullscreencustom",
				"insertdatetime media table imageselector save"
			],
			extended_valid_elements: "form[name|id|action|method|enctype|accept-charset|onsubmit|onreset|target],input[id|name|type|value|size|maxlength|checked|accept|src|width|height|disabled|readonly|tabindex|accesskey|onfocus|onblur|onchange|onselect|onclick|onkeyup|onkeydown|required|style],textarea[id|name|rows|cols|maxlength|disabled|readonly|tabindex|accesskey|onfocus|onblur|onchange|onselect|onclick|onkeyup|onkeydown|required|style],option[name|id|value|selected|style],select[id|name|type|value|size|maxlength|checked|width|height|disabled|readonly|tabindex|accesskey|onfocus|onblur|onchange|onselect|onclick|multiple|style]",
			toolbar: "insertfile | undo | redo | styleselect | bold | italic | strikethrough | imageselector | alignleft | aligncenter | alignright | alignjustify | bullist | numlist | outdent | indent | save",
			allow_html_data_urls: true,
			allow_script_urls: true,
			paste_data_images: true,
			width: '100%',
			save_enablewhendirty: true,
			save_onsavecallback: backButton,
			init_instance_callback : function(editor) {
				tinymceInitFinished();
			}
		});
	} catch(e) {
		jsError(e);
	}
}

function tinymceInitFinished() {
	try {
		dprint("tinymceInitFinished", 2);
		$('#editable_ifr').contents().find("head").append($("<style type='text/css'>  body{font-size:16px;}  </style>"));
		if (platform == "ios") {
			floatHeader();
			$('#editable_ifr').contents().find("body").on('touchstart', hideHeader);
			$('#editable_ifr').contents().find("body").on('touchend', moveHeader);
			var pad = $('#header').height()+$('#mceu_17').height()+10;
			$('#editable_ifr').contents().find("body").css('padding-top', pad);
		} else if (platform == "android" && androidVersion < 4.0) {
			floatHeader();
			setTimeout(function() { 
				var b = $('#editable_ifr').contents().find("body");
				if (b != null)
					b.click(function() { showKeyboard(); });
			}, 500);
			// BUG: Android 2.3: Wide images deform editor
		}
		setTimeout(tinymceFullscreenOn, 500);
	} catch(e) {
		jsError(e);
	}
}

function tinymceFullscreenOn() {
	if (!tinymce) return;
	if (!tinymceinited) return;
	if (platform == "ios") {
		$('.mce-btn').click(function() { moveHeader(); });
		//tinymce.execCommand('mceFocus');
		moveHeader(); 
	} else if (platform == "android" && androidVersion >= 4.0) {
		if (tinymce.activeEditor.plugins.fullscreencustom.isFullscreen() == false)
			tinymce.activeEditor.execCommand('mceFullScreen');
	}
}

function tinymceFullscreenOff() {
	if (!tinymce) return;
	if (!tinymceinited) return;
	if (platform == "ios") {
		$('.mce-btn').click(function() { moveHeader(); });
		tinymce.execCommand('mceFocus');
		moveHeader();
	} else if (platform == "android" && androidVersion >= 4.0) {
		if (tinymce.activeEditor.plugins.fullscreencustom.isFullscreen() == true)
			tinymce.activeEditor.execCommand('mceFullScreen');
	}
}

function showKeyboard() {
	try {
		cordova.plugins.SoftKeyboard.show(function() {
			dprint('Keyboard focus success', 2);
		}, function () {
			dprint('Keyboard focus fail', 2);
		});
	} catch(e) {
		jsError(e);
	}
}

function resizeTiny() {
	try {
		// These functions are run on exit of editor, too.
		// Anything not resizing for that, put in Finished function
		dprint("resizeTiny", 2);
		if (!tinymce) return;
		if (!tinymceinited) return;
		if (platform == "ios") {
			$('.mce-btn').click(function() { moveHeader(); });
			tinymce.execCommand('mceFocus');
			moveHeader();
		} else if (platform == "android" && androidVersion >= 4.0) {
			tinymce.activeEditor.execCommand('mceFullScreen');
		}
	} catch(e) {
		jsError(e);
	}
}

function floatHeader() {
	try {
		if (platform == "ios") {
			$('#header').css('position', 'absolute');
			$('#mceu_17').css('position', 'absolute');
			$('#menu-editnote').css('position', 'absolute');
		} else if (platform == "android" && androidVersion < 4.0) {
			setTimeout(function() {
				floatAndroid23Header();
			}, 500);
		}
		$('#mceu_17').css('background-color', '#F0F0F0');
		$('#mceu_17').css('border', '1px solid #9E9E9E');
		scrolleditor = true;
	} catch(e) {
		jsError(e);
	}
}

function floatAndroid23Header() {
	try {
		$('#mceu_17').css('padding-bottom', '3px');
		var headerHeight = $('#header').height()+3;
		$('#mceu_17').css('padding-top', (headerHeight+3)+'px');
		var position = $('#mceu_25').position();
		var fullHeaderHeight = position.top+headerHeight;
		var b = $('#editable_ifr').contents().find("body");
		if (b != null)
			b.css('margin-top', (fullHeaderHeight+20)+'px');
		$('#mceu_17').css('position', 'fixed');
	} catch(e) {
		jsError(e);
	}
}

function staticHeader() {
	try {
		if (platform == "ios") {
			$('#header').css('position', 'fixed');
			$('#header').css('top', '-1px');
			$('#menu-editnote').css('position', 'fixed');
		}
		$('#mceu_17').css('position', 'relative');
		scrolleditor = false;
	} catch(e) {
		jsError(e);
	}
}

function hideHeader() {
	try {
		//if (scrolleditor && !headerhidden && !headerhiding) {
		if (scrolleditor) {
			touchdown = true;
			setTimeout(function() {
				if (touchdown) {
					$('#menu-editnote').hide();
					//headerhiding = true;
					//headerheight = $('#header').height();
					//mceuheight = $('#mceu_17').height();
					//slideUpHeader('#mceu_17');
					$('#header').hide();
					$('#mceu_17').hide();
				}
			}, 10);
		}
	} catch(e) {
		jsError(e);
	}
}

function fixHeaderFooter() {
	try {
		setTimeout(function() {
			console.log('HEREEEEE');
			//$('#header').css('top', 0);
			//$('#listingfooter').css('bottom', 0);
			//$('#viewfooter').css('bottom', 0);
			//$('#header').css('position', 'fixed');
			//$('#listingfooter').css('position', 'fixed');
			//$('#viewfooter').css('position', 'fixed');
			$("[data-role=header]").toolbar({ tapToggle: false });
			$("[data-role=header]").css('top', 0);
			$("[data-role=header]").show();
			$("[data-role=footer]").toolbar({ tapToggle: false });
			$("[data-role=footer]").css('bottom', 0);
			$("[data-role=footer]").show();
			console.log('HEREEEEE');
		}, 3000);
	} catch(e) {
		jsError(e);
	}
}

function moveHeader() {
	try {
		if (scrolleditor) {
			setTimeout(function() {
				touchdown = false;
				var st = $(window).scrollTop();
				$('#header').css('top', (st-1)+'px');
				$('#mceu_17').css('top', (st-1)+'px');
				$('#menu-editnote').css('top', (st+30)+'px');
				//if (headerheight != -1) {
					//if (headerhidden && !headerhiding) {
						//slideDownHeader('#header');
					//} else {
						//setTimeout(moveHeader, 500);
					//}
				//}
				$('#header').show();
				$('#mceu_17').show();
			}, 0);
		}
	} catch(e) {
		jsError(e);
	}
}

function appPaused() {
	try {
		if (!pickingimage) {
			dprint('appPaused', 2);
			var current = $( ".ui-page-active" ).jqmData( "title" );
			if (current == "Edit Note") {
				var content = tinymce.activeEditor.getContent();
				if (content != notevalue) {
					tinymceFullscreenOff();
					saveNote();
				}
			}
		}
	} catch(e) {
		jsError(e);
	}
}

function appResume() {
	try {
		if (!pickingimage) {
			dprint('appResume', 2);
			var current = $( ".ui-page-active" ).jqmData( "title" );
			if (current == "Edit Note")
				tinymceFullscreenOn();
			if (current != "Login" && apponline && !issyncing) {
				apiGetVersion();
				startSync();
			}
		}
		pickingimage = false;
	} catch(e) {
		jsError(e);
	}
}

// BUG: Android 2.3: On rotation, need to reset padding-top on editor body
function windowResized() {
	try {
		var current = $( ".ui-page-active" ).jqmData( "title" );
		if (current == "View Note") {
			resizeImages($('#viewable'));
		} else if (scrolleditor) {
			if (platform == "android" && androidVersion < 4.0) {
				setTimeout(function() {
					floatAndroid23Header();
				}, 500);
			}
		}
	} catch(e) {
		jsError(e);
	}
}

// BUG: User can close loading screen by tapping outside of popup
function loadingOn() {
	$('#loadingtext').html(trans("Loading notes..."));
	$('#popuploading').popup('open');
}

function translateHTML() {
	try {
		dprint('translateHTML', 2);
		if (language != 'en') {
			$(".translate").each(function() {
				var str = $(this).html();
				if (str.substr(str.length - 1) == ":")
					str = trans(str.substring(0, str.length-1))+':';
				else
					str = trans(str);
				$(this).html(str);
			});
			$(".translatebutton").each(function() {
				var str = $(this).attr('value');
				if (str.substr(str.length - 1) == ":")
					str = trans(str.substring(0, str.length-1))+':';
				else
					str = trans(str);
				$(this).attr('value', str);
			});
		}
	} catch(e) {
		jsError(e);
	}
}

function keyboardShowHandler(e) {
	try {
		dprint('Keyboard height is: ' + e.keyboardHeight, 4);
		var wh = $(window).height()-e.keyboardHeight;
		dprint('New screen height is: ' + wh, 4);
		if (scrolleditor) {
			moveHeader();
		}
	} catch(e) {
		jsError(e);
	}
}

function keyboardHideHandler(e) {
	try {
		var wh = $(window).height();
		dprint('New screen height is: ' + wh, 4);
		if (scrolleditor) {
			moveHeader();
		//} else {
			//fixHeaderFooter();
		}
	} catch(e) {
		jsError(e);
	}
}

function init() {
	try {
		dprint('init', 2);
		platform = cordova.platformId;
		if (platform == "android") {
			androidVersion = parseFloat(getAndroidVersion());
			dprint('androidVersion: '+androidVersion, 2);
			datapath = "Android/data/com.nowsci.ownnote";
		} else {
			window.addEventListener('native.keyboardshow', keyboardShowHandler);
			window.addEventListener('native.keyboardhide', keyboardHideHandler);
			datapath = "ownnote";
			// Fix header jumping when canceling out of a popup
			$(".cancel").each(function() {
				$(this).hide();
			});
		}
		fsInit();
		dbOpen();
		document.addEventListener('backbutton', backButton, false);
		document.addEventListener('online', deviceOnline, false);
		document.addEventListener('offline', deviceOffline, false);
		document.addEventListener('resume', appResume, false);
		document.addEventListener("pause", appPaused, false);
		navigator.globalization.getPreferredLanguage(
			function (inlanguage) {
				dprint('Device language: ' + inlanguage.value + '\n', 4);
				if (l10n[inlanguage.value]) {
					language = inlanguage.value;
				} else {
					if (inlanguage.value.length > 2) {
						var tmplanguage = inlanguage.value.replace('-','_');
						if (l10n[tmplanguage]) {
							language = tmplanguage;
						} else {
							var tmplanguage = inlanguage.value.substr(0,2);
							if (l10n[tmplanguage])
								language = tmplanguage;
							else
								language = "en";
						}
					} else {
						language = "en";
					}
				}
				dprint('App language: ' + language + '\n', 4);
				translateHTML();
				continueInit();
			},
			function () {
				console.log('Error getting language\n');
				language = "en";
				dprint('App language: ' + language + '\n', 4);
				continueInit();
			}
		);
	} catch(e) {
		jsError(e);
	}
}

function continueInit() {
	try {
		dprint('continueInit', 2);
		$(window).resize(function() {
			windowResized();
		});
		$("a[target='_blank']").click(function(e){
			e.preventDefault();
			window.open($(e.currentTarget).attr('href'), '_system', '');
		});
		if ((navigator.connection.type).toUpperCase() != "NONE" && (navigator.connection.type).toUpperCase() != "UNKNOWN") {
			deviceOnline();
		}
		$('#viewable').on('mousedown','a', function(e) {
			dprint('Caught link tap', 2);
			e.preventDefault();
			var elem = $(this);
			var url = elem.attr('href');
			if (url != null && (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1)) {
				dprint('Opening external browser', 2);
				window.open(url, '_blank', 'location');
				document.removeEventListener('backbutton', backButton, false);
			}
		});
		dbSelect("localnotes", function(tmplocalnotes) { 
			if (tmplocalnotes != null && tmplocalnotes != '')
				localnotes = $.parseJSON(tmplocalnotes);
			$(function() {
				$( "[data-role='navbar']" ).navbar();
				$( "[data-role='header'], [data-role='footer']" ).toolbar();
			});
			initialWidth = $(window).width();
			initialHeight = $(window).height();
			initialOrientation = screen.orientation;
			// Update the contents of the toolbars
			$( document ).on( "pagecontainerchange", function() {
				hideMenus();
				// Each of the four pages in this demo has a data-title attribute
				// which value is equal to the text of the nav button
				// For example, on first page: <div data-role="page" data-title="Info">
				var current = $( ".ui-page-active" ).jqmData( "title" );
				// Change the heading
				if (current == "Notes") {
					$("[data-role='header'] h1").text(trans(current)+curgroup);
				} else if (current == "Groups" || current == "Login") {
					$("[data-role='header'] h1").text(trans(current));
				}
				resetIcons(current);
				// Remove active class from nav buttons
				$( "[data-role='navbar'] a" ).removeClass( "ui-btn-active" );
				// Add active class to current nav button
				$( "[data-role='navbar'] a" ).each(function() {
					if ( $( this ).text() == current ) {
						$( this ).addClass( "ui-btn-active" );
					}
				});
			});
			checkLogin();
		});
	} catch(e) {
		jsError(e);
	}
}

function backgroundApp() {
	if (platform == "android")
		navigator.app.exitApp();
	else {
		resetDefaults();
		loginOrListing();
	}
}

function goHome() {
	dprint("goHome", 2);
	var current = $( ".ui-page-active" ).jqmData( "title" );
	if (current == "Edit Note") {
		var content = tinymce.activeEditor.getContent();
		if (content == notevalue) {
			tinymceFullscreenOff();
			$.mobile.changePage($('#noteslisting'), {});
		} else {
			$.mobile.changePage($('#noteslisting'), {});
			tinymceFullscreenOff();
			saveNote();
		}
	} else
		nav('noteslisting');
}

function backButton() {
	try {
		dprint("Back pressed", 2);
		if (menudisplayed) {
			hideMenus();
		} else {
			var current = $( ".ui-page-active" ).jqmData( "title" );
			dprint("Back pressed from: "+current, 2);
			if (current == "Notes") {
				backgroundApp();
			} else if (current == "Groups") {
				$.mobile.changePage($('#noteslisting'), {});
			} else if (current == "View Note") {
				$.mobile.changePage($('#noteslisting'), {});
			} else if (current == "Edit Note") {
				var content = tinymce.activeEditor.getContent();
				if (content == notevalue) {
					tinymceFullscreenOff();
					$.mobile.changePage($('#noteview'), {});
				} else {
					$('#viewable').html(content);
					notevalue = $('#viewable').html();
					$.mobile.changePage($('#noteview'), {});
					tinymceFullscreenOff();
					saveNote();
					setTimeout(function() { updateViewer($('#viewable')) }, 500);
				}
			} else {
				//history.go(-1);
				backgroundApp();
			}
		}
	} catch(e) {
		jsError(e);
	}
}

function resetIcons(current) {
	try {
		hideMenus();
		if (current == "Notes") {
			$('#header-viewnote').hide();
			$('#header-editnote').hide();
			if (ingroup != '' && ingroup != 'All') {
				$('#header-listing').hide();
				$('#header-grouplisting').show();
				$('#newgroup').val(ingroup);
				$('#renamegroup').val(ingroup);
			} else {
				$('#header-listing').show();
				$('#header-grouplisting').hide();
				$('#newgroup').val('');
			}
			$('#listingfooter').show();
			$('#viewfooter').hide();
			if (platform == "ios") {
				$('#backarrow').hide();
				$('#logo').show();
				staticHeader();
			} else if (platform == "android" && androidVersion < 4.0) {
				staticHeader();
			}
		} else if (current == "Login") {
			$('#header-listing').hide();
			$('#header-grouplisting').hide();
			$('#header-viewnote').hide();
			$('#header-editnote').hide();
			$('#listingfooter').hide();
			$('#viewfooter').hide();
		} else if (current == "Groups") {
			$('#header-listing').show();
			$('#header-grouplisting').hide();
			$('#header-viewnote').hide();
			$('#header-editnote').hide();
			$('#listingfooter').hide();
			$('#viewfooter').hide();
		} else if (current == "View Note") {
			$('#header-listing').hide();
			$('#header-grouplisting').hide();
			$('#header-viewnote').show();
			$('#header-editnote').hide();
			$('#listingfooter').hide();
			$('#viewfooter').show();
			if (platform == "ios") {
				$('#logo').hide();
				$('#backarrow').show();
				staticHeader();
				cordova.plugins.Keyboard.close();
			} else if (platform == "android" && androidVersion < 4.0) {
				staticHeader();
			}
		} else if (current == "Edit Note") {
			$('#header-listing').hide();
			$('#header-grouplisting').hide();
			$('#header-viewnote').hide();
			$('#header-editnote').show();
			$('#listingfooter').hide();
			$('#viewfooter').hide();
		} else {
			$('#header-listing').hide();
			$('#header-grouplisting').hide();
			$('#header-viewnote').hide();
			$('#header-editnote').hide();
			$('#listingfooter').hide();
			$('#viewfooter').hide();
		}
	} catch(e) {
		jsError(e);
	}
}

function setUserPass() {
	try {
		dprint('setUserPass', 2);
		if (username != null && password != null && username != '' && password != '') {
			usernameparsed = username;
			if (username.lastIndexOf("[DEBUG][",0) === 0) {
				usernameparsed = username.substring(10, username.length);
			} else if (username.lastIndexOf("[DEBUG]",0) === 0) {
				usernameparsed = username.substring(7, username.length);
			}
			// This shouldn't be needed anymore, since we are using headers
			app.basicAuth(usernameparsed, password);
		}
	} catch(e) {
		jsError(e);
	}
}

function checkLogin() {
	try {
		//BUG: Consider tokens
		dprint('checkLogin', 2);
		dbLogin(function(in_username, in_password, in_server, in_insecure, in_saveoffline) {
			username = in_username;
			password = in_password;
			server = in_server;
			insecure = in_insecure;
			if (insecure == null || insecure == '')
				insecure = "false";
			saveoffline = "true";
			if (in_saveoffline != null && in_saveoffline != '')
				saveoffline = in_saveoffline;
			if (insecure == "true")
				app.acceptAllCerts(true);
			else
				app.acceptAllCerts(false);
			setUserPass();
			if (localnotes == null) {
				dbSelect("localnotes", function(tmplocalnotes) {
					if (tmplocalnotes != null && tmplocalnotes != '')
						localnotes = $.parseJSON(tmplocalnotes);
					loginOrListing();
				});
			} else
				loginOrListing();
		});
	} catch(e) {
		jsError(e);
	}
}

function checkVersion(version) {
	dprint('checkVersion', 2);
	dprint('Server version:'+version, 2);
	if (versionCompare(version, "1.0") < 0) {
		$('#versiontext').html(trans('There are known issues with ownNote for Android when using ownNote server version less than #. Please update ownNote server to the latest version.').replace('#','1.0'));
		$('#popupversion').popup('open');
	}
}

function loginOrListing() {
	dprint('loginOrListing', 2);
	if (localnotes == null || server == null || username == null || password == null || localnotes == '' || server == '' || username == '' || password == '') {
		buildLogin(false);
	} else {
		setDebug();
		var fs = function() { if (apponline) startSync(); };
		buildListing(fs);
		$.mobile.changePage($('#noteslisting'), {});
		if (apponline)
			apiGetVersion();
	}
}

function buildLogin(err) {
	try {
		dprint('buildLogin', 2);
		$('#listingfooter').hide();
		$.mobile.changePage($('#login'), {});
		if (username != null && username != '') $('#username').val(username);
		if (password != null && password != '') $('#password').val(password);
		if (server != null && server != '')
			$('#server').val(server);
		else
			setHint('#server','https://server:port/path');
		if (insecure != null && insecure != '')	 {
			try {
				if (insecure == "true")
					$('#insecure').prop('checked', true).checkboxradio('refresh');
				else
					$('#insecure').prop('checked', false).checkboxradio('refresh');
			} catch (e) {
				dprint(e, 4);
			}
		}
		if (saveoffline != null && saveoffline != '')	 {
			try {
				if (saveoffline == "true")
					$('#saveoffline').prop('checked', true).checkboxradio('refresh');
				else
					$('#saveoffline').prop('checked', false).checkboxradio('refresh');
			} catch (e) {
				dprint(e, 4);
			}
		}
		$('#loginbutton-container').show();
		if (err) {
			setTimeout(popupError, 500);
		}
		testAccount();
	} catch(e) {
		jsError(e);
	}
}

function popupError() {
	try {
		$('#popuperror').popup('open');
	} catch(e) {
		jsError(e);
	}
}

function logoutApp() {
	try {
		$('#server').val('');
		$('#username').val('');
		$('#password').val('');
		try {
			$('#insecure').prop('checked', false).checkboxradio('refresh');
			$('#saveoffline').prop('checked', true).checkboxradio('refresh');
		} catch (e) {
			dprint(e, 4);
		}
		username = "";
		password = "";
		server = "";
		insecure = "false";
		saveoffline = "true";
		localnotes = "";
		dbDeleteAll();
	} catch(e) {
		jsError(e);
	}
}

function submitLogin() {
	try {
		$('#loginbutton-container').hide();
		username = $('#username').val();
		password = $('#password').val();
		server = $('#server').val().trim();
		var firstslash = server.indexOf('/');
		if (firstslash > 0) {
			var remotephp = server.indexOf('remote.php', firstslash);
			if (remotephp > -1)
				server = server.substr(0, remotephp);
			var indexphp = server.indexOf('index.php', firstslash);
			if (indexphp > -1)
				server = server.substr(0, indexphp);
		}
		if (server.indexOf('http') != 0) {
			server = "https://" + server;
		}
		if (server.slice(-1) == "/")
			server = server.substr(0, server.length-1);
		$('#server').val(server);
		dprint('Connecting to server: ' + server, 4);
		if ($('#insecure').prop('checked'))
			insecure = "true";
		else
			insecure = "false";
		if ($('#saveoffline').prop('checked'))
			saveoffline = "true";
		else
			saveoffline = "false";
		setDebug();
		setUserPass();
		if (insecure == "true") {
			app.acceptAllCerts(true);
		} else {
			app.acceptAllCerts(false);
		}
		dbInsertSetting("username", username);
		dbInsertSetting("password", password);
		dbInsertSetting("server", server);
		dbInsertSetting("insecure", insecure);
		dbInsertSetting("saveoffline", saveoffline);
		startSync();
		//$('#listingfooter').show();
		$.mobile.changePage($('#noteslisting'), {});
		setTimeout(loadingOn, 500);
	} catch(e) {
		jsError(e);
	}
}

function setHint(e, t) {
	try {
		if ($(e).val() == '') {
			$(e).val(t);
			$(e).addClass('inputhint');
		}
		$(e).blur(function(){
		    if (this.value == '') {
			this.value = t;
			$(e).addClass('inputhint');
		    }
		})
		$(e).focus(function(){
		    if (this.value == t) {
			this.value = '';
			$(e).removeClass('inputhint');
		    }
		})
	} catch(e) {
		jsError(e);
	}
}

function prevPage() {
	dprint('prevPage', 2);
	try {
		onpage--;
		listNotes(ingroup);
	} catch(e) {
		jsError(e);
	}
}

function nextPage() {
	dprint('nextPage', 2);
	try {
		onpage++;
		listNotes(ingroup);
	} catch(e) {
		jsError(e);
	}
}

function listNotes(passedgroup, fs) {
	dprint('listNotes', 2);
	try {
		var tmplocalnotes = new Array();
		if (passedgroup === parseInt(passedgroup, 10)) {
			ingroup = groups[passedgroup];
		} else {
			ingroup = passedgroup;
		}
		if (ingroup == 'All') {
			curgroup = '';
			tmplocalnotes = localnotes;
		} else if (ingroup == '') {
			curgroup = ' | '+ trans('Not Grouped');
			$.each(localnotes, function (i, note) {
				if (note.group == ingroup && note.deleted == 0) {
					tmplocalnotes.push(note);
				}
			});
		} else {
			curgroup = ' | ' + ingroup;
			$.each(localnotes, function (i, note) {
				if (note.group == ingroup && note.deleted == 0) {
					tmplocalnotes.push(note);
				}
			});
		}
		var html = '';
		var begin = onpage*itemsperpage;
		var end = onpage*itemsperpage+itemsperpage;
		if (end > tmplocalnotes.length)
			end = tmplocalnotes.length
		if (begin > 0) {
				html += '<li><a href=\'javascript:prevPage()\'>'+trans('PREVIOUS PAGE')+'</a></li>';
		}
		for (var i = begin; i < end; i++) {
			var note = tmplocalnotes[i];
			if (note.deleted == 0 && (ingroup == 'All' || note.group == ingroup)) {
				var name = htmlQuotes(note.name);
				html += '<li><a href=\'javascript:displayNote('+i+')\'>' + name + '</a></li>';
			}
		}
		if (end < tmplocalnotes.length) {
				html += '<li><a href=\'javascript:nextPage()\'>'+trans('NEXT PAGE')+'</a></li>';
		}
		$('#noteslist').html(html);
		$('#noteslist').listview().listview('refresh');	
		window.scrollTo(0,0);
		if (fs != null)
			fs();
	} catch(e) {
		jsError(e);
	}
}

function listNotesAndNav(group) {
	listNotes(group);
	$.mobile.changePage($('#noteslisting'), {});
}

function listGroups(fs) {
	try {
		groups.length = 0;
		var nogroup = false;
		$.each(localnotes, function (i, note) {
			if (note.deleted == 0) {
				var group = note.group;
				if (group != '') {
					if ($.inArray(group, groups) === -1) {
						groups.push(group);
					}
				} else {
					nogroup = true;
				}
			}
		});
		groups.sort();
		var l = groups.length;
		var html = '';
		html += '<li><a href="javascript:listNotesAndNav(\'All\')">'+trans('All')+'</a></li>';
		if (nogroup)
			html += '<li><a href="javascript:listNotesAndNav(\'\')">'+trans('Not Grouped')+'</a></li>';
		for (var i = 0; i < l; i++) {
			var group = htmlQuotes(groups[i]);
			html += '<li><a href="javascript:listNotesAndNav('+i+')">' + group + '</a></li>';
		}
		$('#groupslist').html(html);
		$('#groupslist').listview().listview('refresh');	
		listNotes(ingroup, fs);
	} catch(e) {
		jsError(e);
	}
}

function nav(page) {
	try {
		$.mobile.changePage($('#'+page), {});
	} catch(e) {
		jsError(e);
	}
}

function buildListing(fs) {
	try {
		dprint('buildListing', 2);
		if (localnotes != null) {
			listGroups(fs);
		}
	} catch(e) {
		jsError(e);
	}
}

function hideMenus() {
	try {
		menudisplayed = false;
		$('#menu-listing').hide();
		$('#menu-grouplisting').hide();
		$('#menu-viewnote').hide();
		$('#menu-editnote').hide();
		$('#menublock').hide();
	} catch(e) {
		jsError(e);
	}
}

function toggleMenu(menu) {
	try {
		if (platform == "ios" && menu == 'editnote')
			moveHeader();
		$('#menu-'+menu).toggle()
		if (menudisplayed) {
			menudisplayed = false;
			$('#menublock').hide();
		} else {
			menudisplayed = true;
			$('#menublock').show();
		}
	} catch(e) {
		jsError(e);
	}
}

$(document).bind("mobileinit", function(){
	try {
		$.mobile.phonegapNavigationEnabled = true;
		//$.mobile.defaultPageTransition = 'slide';
		$.mobile.defaultPageTransition = 'fade';
	} catch(e) {
		jsError(e);
	}
});

