import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameSumFieldsModelBase } from "./PokemonV2PokedexnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameSumFieldsModel */
export interface PokemonV2PokedexnameSumFieldsModelType extends Instance<typeof PokemonV2PokedexnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameSumFieldsModel */
export { selectFromPokemonV2PokedexnameSumFields, pokemonV2PokedexnameSumFieldsModelPrimitives, PokemonV2PokedexnameSumFieldsModelSelector } from "./PokemonV2PokedexnameSumFieldsModel.base"

/**
 * PokemonV2PokedexnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokedexnameSumFieldsModel = PokemonV2PokedexnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
