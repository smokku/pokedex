import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameSumFieldsModelBase } from "./PokemonV2EgggroupnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameSumFieldsModel */
export interface PokemonV2EgggroupnameSumFieldsModelType extends Instance<typeof PokemonV2EgggroupnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameSumFieldsModel */
export { selectFromPokemonV2EgggroupnameSumFields, pokemonV2EgggroupnameSumFieldsModelPrimitives, PokemonV2EgggroupnameSumFieldsModelSelector } from "./PokemonV2EgggroupnameSumFieldsModel.base"

/**
 * PokemonV2EgggroupnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EgggroupnameSumFieldsModel = PokemonV2EgggroupnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
