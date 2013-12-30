var pokerBroadcaster = require('../../lib/poker-broadcaster');

// TODO: remove asap. This is ugly
broadcastUsers = function() {};
broadcastCards = function() {};
getUserUpdateList = function() {};
getCardUpdateList = function() {};
getUserstoryUpdate = function() {};

describe('poker-broadcaster', function() {
    describe('#broadcast', function() {
        it('should broadcast a JSON message as string', function() {
            var websocketServerMock = {
                broadcastUTF: function() {}
            };
            spyOn(websocketServerMock, 'broadcastUTF');
            pokerBroadcaster.init(websocketServerMock);

            var someRandomMessage = {
                name: 'Bernd',
                active: true,
                foo: 'bar'
            };
            pokerBroadcaster.broadcast(someRandomMessage)

            expect(websocketServerMock.broadcastUTF).toHaveBeenCalledWith(JSON.stringify(someRandomMessage));
        });
    });
});