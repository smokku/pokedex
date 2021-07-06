import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionVarianceFieldsModelBase } from "./PokemonV2PokedexdescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionVarianceFieldsModel */
export interface PokemonV2PokedexdescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionVarianceFieldsModel */
export { selectFromPokemonV2PokedexdescriptionVarianceFields, pokemonV2PokedexdescriptionVarianceFieldsModelPrimitives, PokemonV2PokedexdescriptionVarianceFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarianceFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokedexdescriptionVarianceFieldsModel = PokemonV2PokedexdescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
