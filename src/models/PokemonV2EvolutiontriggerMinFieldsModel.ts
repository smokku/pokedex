import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerMinFieldsModelBase } from "./PokemonV2EvolutiontriggerMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerMinFieldsModel */
export interface PokemonV2EvolutiontriggerMinFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerMinFieldsModel */
export { selectFromPokemonV2EvolutiontriggerMinFields, pokemonV2EvolutiontriggerMinFieldsModelPrimitives, PokemonV2EvolutiontriggerMinFieldsModelSelector } from "./PokemonV2EvolutiontriggerMinFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EvolutiontriggerMinFieldsModel = PokemonV2EvolutiontriggerMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
