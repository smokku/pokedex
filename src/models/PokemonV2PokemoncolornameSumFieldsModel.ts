import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameSumFieldsModelBase } from "./PokemonV2PokemoncolornameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameSumFieldsModel */
export interface PokemonV2PokemoncolornameSumFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameSumFieldsModel */
export { selectFromPokemonV2PokemoncolornameSumFields, pokemonV2PokemoncolornameSumFieldsModelPrimitives, PokemonV2PokemoncolornameSumFieldsModelSelector } from "./PokemonV2PokemoncolornameSumFieldsModel.base"

/**
 * PokemonV2PokemoncolornameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemoncolornameSumFieldsModel = PokemonV2PokemoncolornameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
