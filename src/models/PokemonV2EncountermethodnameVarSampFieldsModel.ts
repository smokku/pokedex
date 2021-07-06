import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameVarSampFieldsModelBase } from "./PokemonV2EncountermethodnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameVarSampFieldsModel */
export interface PokemonV2EncountermethodnameVarSampFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameVarSampFieldsModel */
export { selectFromPokemonV2EncountermethodnameVarSampFields, pokemonV2EncountermethodnameVarSampFieldsModelPrimitives, PokemonV2EncountermethodnameVarSampFieldsModelSelector } from "./PokemonV2EncountermethodnameVarSampFieldsModel.base"

/**
 * PokemonV2EncountermethodnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncountermethodnameVarSampFieldsModel = PokemonV2EncountermethodnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
