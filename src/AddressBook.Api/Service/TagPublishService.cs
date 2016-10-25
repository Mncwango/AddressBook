using PubNubMessaging.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AddressBook.Api.Service
{
    /// <summary>
    /// 
    /// </summary>
    public static class TagPublishService
    {
       private static readonly PubNubMessaging.Core.Pubnub pubnub = new PubNubMessaging.Core.Pubnub("pub-c-19ad29da-ea85-4cc0-b065-73a85bdd597c", "sub-c-d9410dba-9635-11e6-8467-02ee2ddab7fe", "sec-c-YjQ4Mzc4MzYtNzc3NS00NTQ3LTk0ZGYtNGY0ODBlNGRmOTE0");



        static void DisplayReturnMessage(string result)
        {
            Console.WriteLine("PUBLISH STATUS CALLBACK");
            Console.WriteLine(result);
        }
        /// <summary>
        /// Publishes the new tag.
        /// </summary>
        /// <param name="TagName">Name of the tag.</param>
        public static void PublishNewTag(string TagName)
        {
            pubnub.Publish<string>("Channel-cl9mz2gjo", TagName, DisplayReturnMessage, DisplayErrorMessage);
        }
        static void DisplayErrorMessage(PubnubClientError pubnubError)
        {
            Console.WriteLine(pubnubError.StatusCode);
        }
    }
}
