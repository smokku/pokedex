import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerStddevPopFieldsModelBase } from "./PokemonV2EvolutiontriggerStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerStddevPopFieldsModel */
export interface PokemonV2EvolutiontriggerStddevPopFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerStddevPopFieldsModel */
export { selectFromPokemonV2EvolutiontriggerStddevPopFields, pokemonV2EvolutiontriggerStddevPopFieldsModelPrimitives, PokemonV2EvolutiontriggerStddevPopFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevPopFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EvolutiontriggerStddevPopFieldsModel = PokemonV2EvolutiontriggerStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
