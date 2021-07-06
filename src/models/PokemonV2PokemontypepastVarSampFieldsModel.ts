import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypepastVarSampFieldsModelBase } from "./PokemonV2PokemontypepastVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypepastVarSampFieldsModel */
export interface PokemonV2PokemontypepastVarSampFieldsModelType extends Instance<typeof PokemonV2PokemontypepastVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypepastVarSampFieldsModel */
export { selectFromPokemonV2PokemontypepastVarSampFields, pokemonV2PokemontypepastVarSampFieldsModelPrimitives, PokemonV2PokemontypepastVarSampFieldsModelSelector } from "./PokemonV2PokemontypepastVarSampFieldsModel.base"

/**
 * PokemonV2PokemontypepastVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemontypepastVarSampFieldsModel = PokemonV2PokemontypepastVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
