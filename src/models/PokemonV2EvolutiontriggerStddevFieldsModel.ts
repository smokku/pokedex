import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerStddevFieldsModelBase } from "./PokemonV2EvolutiontriggerStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerStddevFieldsModel */
export interface PokemonV2EvolutiontriggerStddevFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerStddevFieldsModel */
export { selectFromPokemonV2EvolutiontriggerStddevFields, pokemonV2EvolutiontriggerStddevFieldsModelPrimitives, PokemonV2EvolutiontriggerStddevFieldsModelSelector } from "./PokemonV2EvolutiontriggerStddevFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutiontriggerStddevFieldsModel = PokemonV2EvolutiontriggerStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
