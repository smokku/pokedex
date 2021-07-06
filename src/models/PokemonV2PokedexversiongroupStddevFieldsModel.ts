import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexversiongroupStddevFieldsModelBase } from "./PokemonV2PokedexversiongroupStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexversiongroupStddevFieldsModel */
export interface PokemonV2PokedexversiongroupStddevFieldsModelType extends Instance<typeof PokemonV2PokedexversiongroupStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexversiongroupStddevFieldsModel */
export { selectFromPokemonV2PokedexversiongroupStddevFields, pokemonV2PokedexversiongroupStddevFieldsModelPrimitives, PokemonV2PokedexversiongroupStddevFieldsModelSelector } from "./PokemonV2PokedexversiongroupStddevFieldsModel.base"

/**
 * PokemonV2PokedexversiongroupStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokedexversiongroupStddevFieldsModel = PokemonV2PokedexversiongroupStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
