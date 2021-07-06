import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueStddevPopFieldsModelBase } from "./PokemonV2EncounterconditionvalueStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueStddevPopFieldsModel */
export interface PokemonV2EncounterconditionvalueStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueStddevPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueStddevPopFields, pokemonV2EncounterconditionvalueStddevPopFieldsModelPrimitives, PokemonV2EncounterconditionvalueStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvalueStddevPopFieldsModel = PokemonV2EncounterconditionvalueStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
