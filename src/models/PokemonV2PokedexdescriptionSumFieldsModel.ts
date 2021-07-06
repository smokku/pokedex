import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionSumFieldsModelBase } from "./PokemonV2PokedexdescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionSumFieldsModel */
export interface PokemonV2PokedexdescriptionSumFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionSumFieldsModel */
export { selectFromPokemonV2PokedexdescriptionSumFields, pokemonV2PokedexdescriptionSumFieldsModelPrimitives, PokemonV2PokedexdescriptionSumFieldsModelSelector } from "./PokemonV2PokedexdescriptionSumFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexdescriptionSumFieldsModel = PokemonV2PokedexdescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
