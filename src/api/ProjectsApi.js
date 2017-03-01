/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       BadInput = require('../model/BadInput'),
       CreateStorage = require('../model/CreateStorage'),
       Forbidden = require('../model/Forbidden'),
       Hub = require('../model/Hub'),
       NotFound = require('../model/NotFound'),
       Project = require('../model/Project'),
       Projects = require('../model/Projects'),
       StorageCreated = require('../model/StorageCreated'),
       TopFolders = require('../model/TopFolders');

  /**
   * Projects service.
   * @module api/ProjectsApi
   * @version 0.2.7
   */

  /**
   * Constructs a new ProjectsApi. 
   * @alias module:api/ProjectsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns a collection of projects for a given &#x60;hub_id&#x60;. A project represents an A360 project or a BIM 360 project which is set up under an A360 hub or BIM 360 account, respectively. Within a hub or an account, multiple projects can be created to be used. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
     * @param {Array.<String>} opts.filterExtensionType filter by the extension type
     * data is of type: {module:model/Projects}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getHubProjects = function(hubId, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        return Promise.reject("Missing the required parameter 'hubId' when calling getHubProjects");
      }


      var pathParams = {
        'hub_id': hubId
      };
      var queryParams = {
        'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
        'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Projects;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns a project for a given &#x60;project_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {String} projectId the &#x60;project id&#x60;
     * data is of type: {module:model/Project}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getProject = function(hubId, projectId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        return Promise.reject("Missing the required parameter 'hubId' when calling getProject");
      }

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getProject");
      }


      var pathParams = {
        'hub_id': hubId,
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Project;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns the hub for a given &#x60;project_id&#x60;. 
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {String} projectId the &#x60;project id&#x60;
     * data is of type: {module:model/Hub}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getProjectHub = function(hubId, projectId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        return Promise.reject("Missing the required parameter 'hubId' when calling getProjectHub");
      }

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getProjectHub");
      }


      var pathParams = {
        'hub_id': hubId,
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = Hub;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects/{project_id}/hub', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns the details of the highest level folders the user has access to for a given project
     * @param {String} hubId the &#x60;hub id&#x60; for the current operation
     * @param {String} projectId the &#x60;project id&#x60;
     * data is of type: {module:model/TopFolders}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getProjectTopFolders = function(hubId, projectId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'hubId' is set
      if (hubId == undefined || hubId == null) {
        return Promise.reject("Missing the required parameter 'hubId' when calling getProjectTopFolders");
      }

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling getProjectTopFolders");
      }


      var pathParams = {
        'hub_id': hubId,
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = TopFolders;

      return this.apiClient.callApi(
        '/project/v1/hubs/{hub_id}/projects/{project_id}/topFolders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Creates a storage location in the OSS where data can be uploaded to. 
     * @param {String} projectId the &#x60;project id&#x60;
     * @param {module:model/CreateStorage} body describe the file the storage is created for
     * data is of type: {module:model/StorageCreated}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.postStorage = function(projectId, body, oauth2client, credentials) {
      var postBody = body;

      // verify the required parameter 'projectId' is set
      if (projectId == undefined || projectId == null) {
        return Promise.reject("Missing the required parameter 'projectId' when calling postStorage");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling postStorage");
      }


      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = StorageCreated;

      return this.apiClient.callApi(
        '/data/v1/projects/{project_id}/storage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
  };

  return exports;
}());
