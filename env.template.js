// Copyright 2025 Atos Spain S.A. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function (window) {
    window['env'] = window['env'] || {};
    // Environment variables
    window['env']['USELF_AGENT_URL'] = '${USELF_AGENT_URL}';
    window['env']['USELF_AUTHENTIC_SOURCE_URL'] = '${USELF_AUTHENTIC_SOURCE_URL}';
    window['env']['USELF_KEYCLOAK_URL'] = '${USELF_KEYCLOAK_URL}';
    window['env']['USELF_PID'] = '${USELF_PID}';
   
})(this);