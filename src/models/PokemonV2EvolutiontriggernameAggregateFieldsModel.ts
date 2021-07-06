import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameAggregateFieldsModelBase } from "./PokemonV2EvolutiontriggernameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameAggregateFieldsModel */
export interface PokemonV2EvolutiontriggernameAggregateFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameAggregateFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameAggregateFields, pokemonV2EvolutiontriggernameAggregateFieldsModelPrimitives, PokemonV2EvolutiontriggernameAggregateFieldsModelSelector } from "./PokemonV2EvolutiontriggernameAggregateFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameAggregateFieldsModel = PokemonV2EvolutiontriggernameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
