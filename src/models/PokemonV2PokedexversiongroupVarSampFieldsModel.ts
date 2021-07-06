import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupVarSampFieldsModelBase } from "./PokemonV2PokedexversiongroupVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupVarSampFieldsModel */
export interface PokemonV2PokedexversiongroupVarSampFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupVarSampFieldsModel */
export { selectFromPokemonV2PokedexversiongroupVarSampFields, pokemonV2PokedexversiongroupVarSampFieldsModelPrimitives, PokemonV2PokedexversiongroupVarSampFieldsModelSelector } from "./PokemonV2PokedexversiongroupVarSampFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokedexversiongroupVarSampFieldsModel = PokemonV2PokedexversiongroupVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
