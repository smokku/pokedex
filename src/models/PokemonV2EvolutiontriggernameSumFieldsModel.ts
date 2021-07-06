import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameSumFieldsModelBase } from "./PokemonV2EvolutiontriggernameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameSumFieldsModel */
export interface PokemonV2EvolutiontriggernameSumFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameSumFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameSumFields, pokemonV2EvolutiontriggernameSumFieldsModelPrimitives, PokemonV2EvolutiontriggernameSumFieldsModelSelector } from "./PokemonV2EvolutiontriggernameSumFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EvolutiontriggernameSumFieldsModel = PokemonV2EvolutiontriggernameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
