import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterVarPopFieldsModelBase } from "./PokemonV2EncounterVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterVarPopFieldsModel */
export interface PokemonV2EncounterVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterVarPopFieldsModel */
export { selectFromPokemonV2EncounterVarPopFields, pokemonV2EncounterVarPopFieldsModelPrimitives, PokemonV2EncounterVarPopFieldsModelSelector } from "./PokemonV2EncounterVarPopFieldsModel.base"

/**
 * PokemonV2EncounterVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterVarPopFieldsModel = PokemonV2EncounterVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
