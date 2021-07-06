import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexVarSampFieldsModelBase } from "./PokemonV2PokedexVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexVarSampFieldsModel */
export interface PokemonV2PokedexVarSampFieldsModelType extends Instance<typeof PokemonV2PokedexVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexVarSampFieldsModel */
export { selectFromPokemonV2PokedexVarSampFields, pokemonV2PokedexVarSampFieldsModelPrimitives, PokemonV2PokedexVarSampFieldsModelSelector } from "./PokemonV2PokedexVarSampFieldsModel.base"

/**
 * PokemonV2PokedexVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokedexVarSampFieldsModel = PokemonV2PokedexVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
