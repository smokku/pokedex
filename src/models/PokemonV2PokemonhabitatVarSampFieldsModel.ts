import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatVarSampFieldsModelBase } from "./PokemonV2PokemonhabitatVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatVarSampFieldsModel */
export interface PokemonV2PokemonhabitatVarSampFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatVarSampFieldsModel */
export { selectFromPokemonV2PokemonhabitatVarSampFields, pokemonV2PokemonhabitatVarSampFieldsModelPrimitives, PokemonV2PokemonhabitatVarSampFieldsModelSelector } from "./PokemonV2PokemonhabitatVarSampFieldsModel.base"

/**
 * PokemonV2PokemonhabitatVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokemonhabitatVarSampFieldsModel = PokemonV2PokemonhabitatVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
