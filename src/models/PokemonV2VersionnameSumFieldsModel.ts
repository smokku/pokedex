import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameSumFieldsModelBase } from "./PokemonV2VersionnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameSumFieldsModel */
export interface PokemonV2VersionnameSumFieldsModelType extends Instance<typeof PokemonV2VersionnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameSumFieldsModel */
export { selectFromPokemonV2VersionnameSumFields, pokemonV2VersionnameSumFieldsModelPrimitives, PokemonV2VersionnameSumFieldsModelSelector } from "./PokemonV2VersionnameSumFieldsModel.base"

/**
 * PokemonV2VersionnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2VersionnameSumFieldsModel = PokemonV2VersionnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
