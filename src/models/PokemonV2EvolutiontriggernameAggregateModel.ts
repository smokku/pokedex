import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameAggregateModelBase } from "./PokemonV2EvolutiontriggernameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameAggregateModel */
export interface PokemonV2EvolutiontriggernameAggregateModelType extends Instance<typeof PokemonV2EvolutiontriggernameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameAggregateModel */
export { selectFromPokemonV2EvolutiontriggernameAggregate, pokemonV2EvolutiontriggernameAggregateModelPrimitives, PokemonV2EvolutiontriggernameAggregateModelSelector } from "./PokemonV2EvolutiontriggernameAggregateModel.base"

/**
 * PokemonV2EvolutiontriggernameAggregateModel
 *
 * aggregated selection of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameAggregateModel = PokemonV2EvolutiontriggernameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
