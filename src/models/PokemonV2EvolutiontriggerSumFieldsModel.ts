import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerSumFieldsModelBase } from "./PokemonV2EvolutiontriggerSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerSumFieldsModel */
export interface PokemonV2EvolutiontriggerSumFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerSumFieldsModel */
export { selectFromPokemonV2EvolutiontriggerSumFields, pokemonV2EvolutiontriggerSumFieldsModelPrimitives, PokemonV2EvolutiontriggerSumFieldsModelSelector } from "./PokemonV2EvolutiontriggerSumFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutiontriggerSumFieldsModel = PokemonV2EvolutiontriggerSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
