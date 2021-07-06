import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotVarPopFieldsModelBase } from "./PokemonV2EncounterslotVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotVarPopFieldsModel */
export interface PokemonV2EncounterslotVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterslotVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotVarPopFieldsModel */
export { selectFromPokemonV2EncounterslotVarPopFields, pokemonV2EncounterslotVarPopFieldsModelPrimitives, PokemonV2EncounterslotVarPopFieldsModelSelector } from "./PokemonV2EncounterslotVarPopFieldsModel.base"

/**
 * PokemonV2EncounterslotVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterslotVarPopFieldsModel = PokemonV2EncounterslotVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
