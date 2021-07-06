import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerAvgFieldsModelBase } from "./PokemonV2EvolutiontriggerAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerAvgFieldsModel */
export interface PokemonV2EvolutiontriggerAvgFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerAvgFieldsModel */
export { selectFromPokemonV2EvolutiontriggerAvgFields, pokemonV2EvolutiontriggerAvgFieldsModelPrimitives, PokemonV2EvolutiontriggerAvgFieldsModelSelector } from "./PokemonV2EvolutiontriggerAvgFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutiontriggerAvgFieldsModel = PokemonV2EvolutiontriggerAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
