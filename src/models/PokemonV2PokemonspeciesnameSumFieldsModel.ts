import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameSumFieldsModelBase } from "./PokemonV2PokemonspeciesnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameSumFieldsModel */
export interface PokemonV2PokemonspeciesnameSumFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameSumFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameSumFields, pokemonV2PokemonspeciesnameSumFieldsModelPrimitives, PokemonV2PokemonspeciesnameSumFieldsModelSelector } from "./PokemonV2PokemonspeciesnameSumFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesnameSumFieldsModel = PokemonV2PokemonspeciesnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
