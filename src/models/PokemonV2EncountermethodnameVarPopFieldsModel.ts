import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameVarPopFieldsModelBase } from "./PokemonV2EncountermethodnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameVarPopFieldsModel */
export interface PokemonV2EncountermethodnameVarPopFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameVarPopFieldsModel */
export { selectFromPokemonV2EncountermethodnameVarPopFields, pokemonV2EncountermethodnameVarPopFieldsModelPrimitives, PokemonV2EncountermethodnameVarPopFieldsModelSelector } from "./PokemonV2EncountermethodnameVarPopFieldsModel.base"

/**
 * PokemonV2EncountermethodnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncountermethodnameVarPopFieldsModel = PokemonV2EncountermethodnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
