import { Instance } from "mobx-state-tree"
import { PokemonV2PokemontypeVarSampFieldsModelBase } from "./PokemonV2PokemontypeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemontypeVarSampFieldsModel */
export interface PokemonV2PokemontypeVarSampFieldsModelType extends Instance<typeof PokemonV2PokemontypeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemontypeVarSampFieldsModel */
export { selectFromPokemonV2PokemontypeVarSampFields, pokemonV2PokemontypeVarSampFieldsModelPrimitives, PokemonV2PokemontypeVarSampFieldsModelSelector } from "./PokemonV2PokemontypeVarSampFieldsModel.base"

/**
 * PokemonV2PokemontypeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemontypeVarSampFieldsModel = PokemonV2PokemontypeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
