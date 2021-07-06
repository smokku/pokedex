import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameVarPopFieldsModelBase } from "./PokemonV2EncounterconditionnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameVarPopFieldsModel */
export interface PokemonV2EncounterconditionnameVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameVarPopFieldsModel */
export { selectFromPokemonV2EncounterconditionnameVarPopFields, pokemonV2EncounterconditionnameVarPopFieldsModelPrimitives, PokemonV2EncounterconditionnameVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionnameVarPopFieldsModel = PokemonV2EncounterconditionnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
