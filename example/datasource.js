define( [
		'angular',
		'lodash',
		'./directives',
		'./query_ctrl',
	],
	function( angular, _ ) {
		'use strict';

		var module = angular.module( 'grafana.services' );

		module.factory( 'ExampleDatasource', [ '$q', '$http', 'backendSrv', 'templateSrv', function( $q, $http, backendSrv, templateSrv ) {
			function ExampleDatasource( datasource ) {
			}

			// Query for metric targets within the specified time range.
			// Returns the promise of a result dictionary. See the convertResponse comment
			// for specifics of the result dictionary.
			ExampleDatasource.prototype.query = function( queryOptions ) {
				var self = this;

				// The timestamp FROM which points are requested.
				queryOptions.range.from.valueOf();
				// The timestamp TO which points are requested.
				queryOptions.range.to.valueOf();

				// An array of all of the targets
				// Each target will contain information added from query.editor.html
				queryOptions.targets;
				var firstTarget = queryOptions.targets[0];

				// This is what was set in query.editor.html
				firstTarget.name;

				// Must return an angular promise.
				// The promise data must look like the var below...
				var promiseData = [
					{
						target: "First target name",
						datapoints: [
							// Note: datapoints MUST be returned in the order you want them plotted
							// ie. in time order.
							[ 77, 1448117934475 ],
							[ 89, 1888237564482 ]
						]
					},
					{
						target: "Second target name",
						datapoints: []
					}
				];
			};

			return ExampleDatasource;
		} ] );
	} );
