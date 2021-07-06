import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerVarPopFieldsModelBase } from "./PokemonV2EvolutiontriggerVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerVarPopFieldsModel */
export interface PokemonV2EvolutiontriggerVarPopFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerVarPopFieldsModel */
export { selectFromPokemonV2EvolutiontriggerVarPopFields, pokemonV2EvolutiontriggerVarPopFieldsModelPrimitives, PokemonV2EvolutiontriggerVarPopFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarPopFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EvolutiontriggerVarPopFieldsModel = PokemonV2EvolutiontriggerVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
